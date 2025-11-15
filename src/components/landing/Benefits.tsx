import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
    "Obediência sem briga",
    "Rotinas automáticas",
    "Paz emocional",
    "Mais conexão",
    "Menos birras",
    "Independência da criança",
    "Casa organizada",
    "Fim dos gritos"
];

const Benefits = () => {
    return (
        <section className="py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
                        Imagine uma vida com mais paz e menos estresse
                    </h2>
                    <p className="font-body text-lg md:text-xl text-brand-dark-blue/80">
                        Com a Rotina Mágica, você conquista benefícios reais para toda a família:
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle2 className="w-6 h-6 text-brand-turquoise mr-3 flex-shrink-0" />
                                        <span className="font-subtitle text-lg md:text-xl font-medium text-brand-dark-blue">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
