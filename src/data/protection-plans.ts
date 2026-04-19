export interface FinancingOption {
    months: number;
    monthly: number;
    total: number;
}

export interface ProtectionPlan {
    id: string;
    title: string;
    gavetas?: number;
    urnas?: number;
    location?: string;
    section?: 'Luz Natural' | 'Posterior Interior';
    priceContado: number;
    engancheInmediato: number;
    enganchePrevision: number;
    openingCost: number;
    maintenanceCost: number;
    features: string[];
    previsionFinancing: FinancingOption[];
    inmediatoFinancing: FinancingOption[];
}

export const PROTECTION_PLANS: ProtectionPlan[] = [
    {
        id: '2-gavetas',
        title: 'Fosa 2 Gavetas',
        gavetas: 2,
        priceContado: 35000,
        engancheInmediato: 7000,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 1408,
        features: ["Capacidad para 2 personas", "Ubicación General", "Transferible"],
        previsionFinancing: [
            { months: 3, monthly: 11666.67, total: 35000 },
            { months: 6, monthly: 5833.33, total: 35000 },
            { months: 12, monthly: 2996, total: 37452 },
            { months: 24, monthly: 1608, total: 40092 },
            { months: 36, monthly: 1150, total: 42900 },
            { months: 48, monthly: 925, total: 45900 },
            { months: 60, monthly: 794, total: 49140 },
            { months: 72, monthly: 709, total: 52548 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 3074, total: 40814 },
            { months: 23, monthly: 1572, total: 43156 },
            { months: 35, monthly: 1105, total: 45675 }
        ]
    },
    {
        id: '3-gavetas',
        title: 'Fosa 3 Gavetas',
        gavetas: 3,
        priceContado: 39920,
        engancheInmediato: 8885,
        enganchePrevision: 1600,
        openingCost: 0,
        maintenanceCost: 1408,
        features: ["Capacidad para 3 personas", "Ubicación General", "Transferible"],
        previsionFinancing: [
            { months: 3, monthly: 13306.67, total: 39920 },
            { months: 6, monthly: 6653.33, total: 39920 },
            { months: 12, monthly: 3393, total: 42316 },
            { months: 24, monthly: 1803, total: 44872 },
            { months: 36, monthly: 1277, total: 47572 },
            { months: 48, monthly: 1017, total: 50416 },
            { months: 60, monthly: 864, total: 53440 },
            { months: 72, monthly: 765, total: 56680 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 3377, total: 46032 },
            { months: 23, monthly: 1731, total: 48698 },
            { months: 35, monthly: 1219, total: 51550 }
        ]
    },
    {
        id: '4-gavetas',
        title: 'Fosa 4 Gavetas',
        gavetas: 4,
        priceContado: 46500,
        engancheInmediato: 10000,
        enganchePrevision: 1700,
        openingCost: 0,
        maintenanceCost: 1408,
        features: ["Capacidad para 4 personas", "Ubicación General", "Transferible"],
        previsionFinancing: [
            { months: 3, monthly: 15500, total: 46500 },
            { months: 6, monthly: 7750, total: 46500 },
            { months: 12, monthly: 3928, total: 48836 },
            { months: 24, monthly: 2066, total: 51284 },
            { months: 36, monthly: 1449, total: 53864 },
            { months: 48, monthly: 1143, total: 56564 },
            { months: 60, monthly: 961, total: 59360 },
            { months: 72, monthly: 842, total: 62324 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 3866, total: 52526 },
            { months: 23, monthly: 1959, total: 55057 },
            { months: 35, monthly: 1365, total: 57775 }
        ]
    },
    {
        id: '5-gavetas',
        title: 'Fosa 5 Gavetas',
        gavetas: 5,
        priceContado: 54000,
        engancheInmediato: 10500,
        enganchePrevision: 1800,
        openingCost: 0,
        maintenanceCost: 1408,
        features: ["Capacidad para 5 personas", "Ubicación General", "Transferible"],
        previsionFinancing: [
            { months: 3, monthly: 18000, total: 54000 },
            { months: 6, monthly: 9000, total: 54000 },
            { months: 12, monthly: 4530, total: 56160 },
            { months: 24, monthly: 2359, total: 58416 },
            { months: 36, monthly: 1638, total: 60768 },
            { months: 48, monthly: 1279, total: 63192 },
            { months: 60, monthly: 1065, total: 65700 },
            { months: 72, monthly: 924, total: 68328 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 4485, total: 59835 },
            { months: 23, monthly: 2247, total: 62181 },
            { months: 35, monthly: 1546, total: 64610 }
        ]
    }
];

export const NICHO_PLANS: ProtectionPlan[] = [
    // SECCIÓN LUZ NATURAL (MÁS PREMIUM)
    {
        id: 'nicho-2-central-luz',
        title: 'Nicho 2 Urnas (Fila Central)',
        urnas: 2,
        location: 'Premium (Filas 3 y 4)',
        section: 'Luz Natural',
        priceContado: 25800,
        engancheInmediato: 7740,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 587,
        features: ["Capacidad: 2 Urnas", "Ubicación Premium (Ojos)", "Incluye 3 aperturas de nicho"],
        previsionFinancing: [
            { months: 3, monthly: 8600, total: 25800 },
            { months: 6, monthly: 4300, total: 25800 },
            { months: 12, monthly: 2154, total: 27348 },
            { months: 24, monthly: 1146, total: 29004 },
            { months: 36, monthly: 812, total: 30732 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 1725, total: 26715 }
        ]
    },
    {
        id: 'nicho-2-lateral-luz',
        title: 'Nicho 2 Urnas (Fila Lateral)',
        urnas: 2,
        location: 'Luz Natural (Filas 1, 2, 5, 6)',
        section: 'Luz Natural',
        priceContado: 14700,
        engancheInmediato: 4410,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 587,
        features: ["Capacidad: 2 Urnas", "Ubicación Luz Natural", "Incluye 3 aperturas de nicho"],
        previsionFinancing: [
            { months: 3, monthly: 4900, total: 14700 },
            { months: 6, monthly: 2450, total: 14700 },
            { months: 12, monthly: 1174, total: 15588 },
            { months: 24, monthly: 626, total: 16524 },
            { months: 36, monthly: 445, total: 17520 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 980, total: 15190 }
        ]
    },
    {
        id: 'nicho-4-central-luz',
        title: 'Nicho 4 Urnas (Fila Central)',
        urnas: 4,
        location: 'Premium (Filas 3 y 4)',
        section: 'Luz Natural',
        priceContado: 25800,
        engancheInmediato: 7740,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 587,
        features: ["Capacidad: 4 Urnas", "Ubicación Premium (Ojos)", "Incluye 3 aperturas de nicho"],
        previsionFinancing: [
            { months: 3, monthly: 8600, total: 25800 },
            { months: 6, monthly: 4300, total: 25800 },
            { months: 12, monthly: 2154, total: 27348 },
            { months: 24, monthly: 1146, total: 29004 },
            { months: 36, monthly: 812, total: 30732 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 1725, total: 26715 }
        ]
    },
    {
        id: 'nicho-4-lateral-luz',
        title: 'Nicho 4 Urnas (Fila Lateral)',
        urnas: 4,
        location: 'Luz Natural (Filas 1, 2, 5, 6)',
        section: 'Luz Natural',
        priceContado: 24000,
        engancheInmediato: 7200,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 587,
        features: ["Capacidad: 4 Urnas", "Ubicación Luz Natural", "Incluye 3 aperturas de nicho"],
        previsionFinancing: [
            { months: 3, monthly: 8000, total: 24000 },
            { months: 6, monthly: 4000, total: 24000 },
            { months: 12, monthly: 1995, total: 25440 },
            { months: 24, monthly: 1062, total: 26988 },
            { months: 36, monthly: 753, total: 28608 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 1600, total: 24800 }
        ]
    },
    // SECCIÓN POSTERIOR INTERIOR (MÁS ECONÓMICA)
    {
        id: 'nicho-2-central-posterior',
        title: 'Nicho 2 Urnas (Fila Central)',
        urnas: 2,
        location: 'Premium (Filas 3 y 4)',
        section: 'Posterior Interior',
        priceContado: 15000,
        engancheInmediato: 4500,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 587,
        features: ["Capacidad: 2 Urnas", "Ubicación Premium (Ojos)", "Incluye 3 aperturas de nicho"],
        previsionFinancing: [
            { months: 3, monthly: 5000, total: 15000 },
            { months: 6, monthly: 2500, total: 15000 },
            { months: 12, monthly: 988, total: 13356 },
            { months: 24, monthly: 528, total: 14172 },
            { months: 36, monthly: 376, total: 15036 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 1000, total: 15500 }
        ]
    },
    {
        id: 'nicho-2-lateral-posterior',
        title: 'Nicho 2 Urnas (Fila Lateral)',
        urnas: 2,
        location: 'Luz Natural (Filas 1, 2, 5, 6)',
        section: 'Posterior Interior',
        priceContado: 12800,
        engancheInmediato: 3840,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 587,
        features: ["Capacidad: 2 Urnas", "Ubicación Estándar", "Incluye 3 aperturas de nicho"],
        previsionFinancing: [
            { months: 3, monthly: 4266.67, total: 12800 },
            { months: 6, monthly: 2133.33, total: 12800 },
            { months: 12, monthly: 1006, total: 13572 },
            { months: 24, monthly: 537, total: 14388 },
            { months: 36, monthly: 382, total: 15252 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 855, total: 13245 }
        ]
    },
    {
        id: 'nicho-4-central-posterior',
        title: 'Nicho 4 Urnas (Fila Central)',
        urnas: 4,
        location: 'Premium (Filas 3 y 4)',
        section: 'Posterior Interior',
        priceContado: 22500,
        engancheInmediato: 6750,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 587,
        features: ["Capacidad: 4 Urnas", "Ubicación Premium (Ojos)", "Incluye 3 aperturas de nicho"],
        previsionFinancing: [
            { months: 3, monthly: 7500, total: 22500 },
            { months: 6, monthly: 3750, total: 22500 },
            { months: 12, monthly: 1863, total: 23856 },
            { months: 24, monthly: 991, total: 25284 },
            { months: 36, monthly: 703, total: 26808 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 1500, total: 23250 }
        ]
    },
    {
        id: 'nicho-4-lateral-posterior',
        title: 'Nicho 4 Urnas (Fila Lateral)',
        urnas: 4,
        location: 'Luz Natural (Filas 1, 2, 5, 6)',
        section: 'Posterior Interior',
        priceContado: 21000,
        engancheInmediato: 6300,
        enganchePrevision: 1500,
        openingCost: 0,
        maintenanceCost: 587,
        features: ["Capacidad: 4 Urnas", "Ubicación Estándar", "Incluye 3 aperturas de nicho"],
        previsionFinancing: [
            { months: 3, monthly: 7000, total: 21000 },
            { months: 6, monthly: 3500, total: 21000 },
            { months: 12, monthly: 1730, total: 22260 },
            { months: 24, monthly: 921, total: 23604 },
            { months: 36, monthly: 654, total: 25044 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 1400, total: 22100 }
        ]
    }
];
