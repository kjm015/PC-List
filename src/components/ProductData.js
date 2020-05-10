const productData = [
    {
        title: 'The Glow Box',
        owner: 'Arjun Sud',
        cols: 1,
        featured: true,
        specs: {
            cpu: 'AMD Ryzen 9 3950X',
            gpu: "Nvidia Founder's Edition RTX 2080 Super",
            motherboard: 'Asus TUF Gaming X570-Plus WiFi',
            ram: '2x G.Skill TridentZ RGB 8GB DDR4-3200',
            case: 'Lian Li O11 Dynamic',
            cooler: 'Cooler Master MasterLiquid ML360R'
        },
        images: [
            '/static/glowbox.jpg'
        ]
    },
    {
        title: 'The Ice Cube',
        owner: 'Kevin Miyata',
        cols: 1,
        featured: true,
        specs: {
            cpu: 'AMD Ryzen 7 2700X',
            gpu: 'Sapphire Pulse RX 5600 XT',
            motherboard: 'Asus ROG Strix B450-I Gaming',
            ram: '2x Crucial Ballistix Sport LT 8GB DDR4-3200',
            case: 'NZXT H210',
            cooler: 'Arctic Freezer 34 CO'
        },
        images: [
            '/static/minibox.jpg'
        ]
    },
    {
        title: 'The Zheng Box',
        owner: 'Kevin Zheng',
        cols: 1,
        featured: true,
        specs: {
            cpu: 'AMD Ryzen 5 3600X',
            gpu: 'EVGA RTX 2080 Super Black Gaming',
            motherboard: 'Gigabyte X570 Aorus Elite WiFi',
            ram: '2x G.Skill Ripjaws V 8GB DDR4-3600',
            case: 'Fractal Design Meshify C',
            cooler: 'NZXT Kraken X63'
        },
        images: [
            '/static/zhengbox.jpg',
            '/static/zhengbox2.jpg'
        ]
    },
    {
        img: '/static/jossbox.jpg',
        title: 'The Joss Box',
        owner: 'Jess Miyata',
        cols: 1,
        featured: true,
        specs: {
            cpu: 'AMD Ryzen 5 3600X',
            gpu: 'Asus ROG Strix GTX 1070 Gaming',
            motherboard: 'Gigabyte B450 Aorus Elite',
            ram: '2x G.Skill Ripjaws V 8GB DDR4-3200',
            case: 'Cooler Master MasterCase H500',
            cooler: 'be quiet! Dark Rock Slim'
        },
        images: [
            '/static/jossbox.jpg',
            '/static/jossbox2.jpg'
        ]
    },
    {
        title: 'Project Box',
        owner: 'Kevin Miyata',
        cols: 1,
        featured: false,
        specs: {
            cpu: 'AMD Ryzen 5 1600',
            gpu: 'EVGA RTX 2060 KO Ultra Gaming',
            motherboard: 'Asus ROG Strix B450-F Gaming',
            ram: '2x Crucial Ballistix Sport LT 8GB DDR4-3200',
            case: 'NZXT H510',
            cooler: 'Cooler Master Wraith Prism'
        },
        images: [
            '/static/projectbox.jpg',
            '/static/evga-sc-ultra.jpg'
        ]
    },
    {
        title: 'The Ice Box',
        owner: 'Kevin Miyata',
        cols: 1,
        featured: false,
        specs: {
            cpu: 'AMD Ryzen 9 3900X',
            gpu: 'Gigabyte RTX 2070 Super Gaming OC White',
            motherboard: 'Gigabyte X570 Aorus Elite',
            ram: '2x Corsair Vengeance Pro RGB 16GB DDR4-3600',
            case: 'Fractal Design Meshify C',
            cooler: 'DEEPCOOL Castle 240EX'
        },
        images: [
            '/static/icebox.jpg',
            '/static/icebox2.jpg'
        ]
    },
    {
        title: 'Siri Box',
        owner: 'Lynn Kang',
        cols: 1,
        featured: false,
        specs: {
            cpu: 'AMD Ryzen 7 2700X',
            gpu: 'Zotac GTX 1660 Super Twin Fan',
            motherboard: 'MSI B450 Tomahawk MAX',
            ram: '2x G.Skill Ripjaws V 8GB DDR4-3200',
            case: 'NZXT H510',
            cooler: 'Cooler Master Wraith Prism'
        },
        images: [
            '/static/siribox.jpg',
            '/static/siri-box2.jpg'
        ]
    },
    {
        title: 'The Wind Box',
        owner: 'Pawel Wota',
        cols: 1,
        featured: false,
        specs: {
            cpu: 'AMD Ryzen 5 1600',
            gpu: 'EVGA GTX 1660 Super SC Ultra',
            motherboard: 'MSI B450 Tomahawk',
            ram: '2x G.Skill Ripjaws V 8GB DDR4-3200',
            case: 'Phanteks Eclipse P300A',
            cooler: 'Cooler Master Wraith Spire'
        },
        images: [
            '/static/windbox.jpg',
            '/static/evga-sc-ultra.jpg'
        ]
    },
    {
        img: '/static/jeremypc2.jpg',
        title: 'Jeremy Box',
        owner: 'Jeremy Nielson',
        cols: 1,
        featured: false,
        specs: {
            cpu: 'Intel Core i9-9900K',
            gpu: 'EVGA RTX 2080 XC Ultra',
            motherboard: 'Asus PRIME Z390-A',
            ram: '2x Corsair Vengeance Pro RGB 8GB DDR4-3200',
            case: 'Thermaltake View 31',
            cooler: 'Corsair H100i Platinum RGB'
        },
        images: [
            '/static/jeremypc2.jpg'
        ]
    },
    {
        img: '/static/joshbox.jpg',
        title: 'Josh Box',
        owner: 'Josh Hayes',
        cols: 1,
        featured: false,
        specs: {
            cpu: 'AMD FX-8350',
            gpu: 'MSI GTX 1650 Super Ventus XS OC',
            motherboard: 'MSI 970 Gaming',
            ram: '4x G.Skill Ripjaws IV 4GB DDR3-1600',
            case: 'Thermaltake Commander G41',
            cooler: 'Cooler Master Wraith Max'
        },
        images: [
            '/static/joshbox.jpg',
            '/static/joshbox2.jpg'
        ]
    }
];

export default productData;