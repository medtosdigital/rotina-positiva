import * as React from 'react';

type Strategy = 'afterInteractive' | 'lazyOnload' | 'beforeInteractive' | 'worker';

export type NextScriptProps = {
  id?: string;
  src?: string;
  strategy?: Strategy;
  async?: boolean;
  defer?: boolean;
  type?: string;
  dangerouslySetInnerHTML?: { __html: string };
} & React.HTMLAttributes<HTMLScriptElement>;

export default function Script(props: NextScriptProps) {
  const { id, src, async, defer, type, dangerouslySetInnerHTML } = props;

  React.useEffect(() => {
    const script = document.createElement('script');
    if (id) script.id = id;

    if (src) {
      script.src = src;
      script.async = async ?? true;
      script.defer = defer ?? true;
      if (type) script.type = type;
    }

    if (dangerouslySetInnerHTML?.__html) {
      script.text = dangerouslySetInnerHTML.__html;
    }

    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [id, src, async, defer, type, dangerouslySetInnerHTML?.__html]);

  return null;
}
