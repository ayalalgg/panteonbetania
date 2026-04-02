export interface FinancingOption {
    months: number;
    monthly: number;
    total: number;
}

export interface ProtectionPlan {
    id: string;
    title: string;
    gavetas: number;
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
        priceContado: 27920,
        engancheInmediato: 7000,
        enganchePrevision: 1500,
        openingCost: 0, // En uso inmediato se cobra aparte o se suma
        maintenanceCost: 1408,
        features: ["Capacidad para 2 personas", "Ubicación General", "Transferible"],
        previsionFinancing: [
            { months: 3, monthly: 9306.67, total: 27920 },
            { months: 6, monthly: 4653.33, total: 27920 },
            { months: 12, monthly: 2342, total: 29604 },
            { months: 24, monthly: 1245, total: 31380 },
            { months: 36, monthly: 883, total: 33288 },
            { months: 48, monthly: 704, total: 35292 },
            { months: 60, monthly: 598, total: 37380 },
            { months: 72, monthly: 530, total: 39660 }
        ],
        inmediatoFinancing: [
            { months: 11, monthly: 2219, total: 31404 },
            { months: 23, monthly: 1139, total: 33192 },
            { months: 35, monthly: 802, total: 35064 }
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
            { months: 11, monthly: 3204, total: 44124 },
            { months: 23, monthly: 1643, total: 46656 },
            { months: 35, monthly: 1157, total: 49356 }
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
            { months: 11, monthly: 3694, total: 50628 },
            { months: 23, monthly: 1874, total: 53088 },
            { months: 35, monthly: 1305, total: 55656 }
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
            { months: 11, monthly: 4315, total: 57960 },
            { months: 23, monthly: 2162, total: 60216 },
            { months: 35, monthly: 1488, total: 62568 }
        ]
    }
];
