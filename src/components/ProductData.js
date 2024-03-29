const productData = [
    {
        img: '/static/glowboxm_3.jpg',
        title: 'Glowbox Micro',
        owner: 'Cesar A.',
        cols: 1,
        featured: true,
        specs: {
            cpu: 'AMD Ryzen 7 2700X',
            gpu: 'Gigabyte RTX 3060 Ti Gaming OC Pro',
            motherboard: 'Gigabyte B450 Aorus M',
            ram: '2x Crucial Ballistix 8 GB DDR4-3200',
            case: 'Cooler Master MB311L',
            cooler: 'Cooler Master Wraith Prism'
        },
        images: [
            '/static/glowboxm_1.jpg',
            '/static/glowboxm_3.jpg',
            '/static/glowboxm_2.jpg'
        ]
    },
    {
        img: '/static/hotline.jpg',
        title: 'Hotline',
        owner: 'Emily P.',
        cols: 1,
        featured: true,
        specs: {
            cpu: 'AMD Ryzen 5 3600',
            gpu: 'Gigabyte RTX 3060 Ti Gaming OC Pro',
            motherboard: 'MSI B450 Tomahawk MAX',
            ram: '2x Crucial Ballistix RGB 8 GB DDR4-3200',
            case: 'Phanteks Eclipse P360A',
            cooler: 'Corsair H100i Platinum RGB'
        },
        images: [
            '/static/hotline.jpg',
            '/static/hotline2.jpg',
            '/static/hotline3.jpg'
        ]
    },
    {
        title: 'The Glow Box',
        owner: 'Arjun S.',
        cols: 1,
        featured: true,
        specs: {
            cpu: 'AMD Ryzen 9 3950X',
            gpu: "Nvidia Founder's Edition RTX 2080 Super",
            motherboard: 'Asus TUF Gaming X570-Plus WiFi',
            ram: '2x G.Skill TridentZ RGB 16GB DDR4-3200',
            case: 'Lian Li PC-O11 Dynamic',
            cooler: 'Cooler Master MasterLiquid ML360R'
        },
        images: [
            '/static/glowbox.jpg',
            '/static/glowbox2.jpg',
            '/static/glowbox3.jpg'
        ]
    },
    {
        title: 'The Ice Cube',
        owner: 'Kevin M.',
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
            '/static/minibox.jpg',
            '/static/minibox2.jpg'
        ]
    },
    {
        title: 'The Zheng Box',
        owner: 'Kevin Z.',
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
        owner: 'Jess M.',
        cols: 1,
        featured: true,
        specs: {
            cpu: 'AMD Ryzen 5 3600X',
            gpu: 'Asus ROG Strix GTX 1070 Gaming OC',
            motherboard: 'Gigabyte B450 Aorus Elite',
            ram: '2x G.Skill Ripjaws V 8GB DDR4-3200',
            case: 'Cooler Master MasterCase H500',
            cooler: 'be quiet! Dark Rock Slim'
        },
        images: [
            '/static/jossbox2.jpg',
            '/static/jossbox3.jpg',
            '/static/jossbox.jpg'
        ]
    },
    {
        img: '/static/projectbox.jpg',
        title: 'NeemDab Box',
        owner: 'Neemesh G.',
        cols: 1,
        featured: false,
        specs: {
            cpu: 'AMD Ryzen 7 3700X',
            gpu: 'EVGA RTX 2060 KO Ultra Gaming',
            motherboard: 'Asus ROG Strix B450-F Gaming',
            ram: '2x Crucial Ballistix Sport LT 8GB DDR4-3200',
            case: 'NZXT H510',
            cooler: 'Cooler Master Wraith Prism'
        },
        images: [
            '/static/projectbox.jpg',
            '/static/project-box4.jpg',
            '/static/project-box3.jpg',
            '/static/project-box2.jpg',
            '/static/project-box5.jpg',
            '/static/evga-sc-ultra.jpg',
            '/static/project-box6.jpg'
        ]
    },
    {
        title: 'The Ice Box',
        owner: 'Kevin M.',
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
            '/static/icebox2.jpg',
            '/static/icebox3.jpg',
            '/static/icebox4.jpg'
        ]
    },
    {
        title: 'The Wind Box',
        owner: 'Pawel W.',
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
            '/static/windbox2.jpg',
            '/static/evga-sc-ultra.jpg'
        ]
    },
    {
        img: '/static/cbox3.jpg',
        title: 'Flex Box',
        owner: 'Harry C.',
        cols: 1,
        featured: false,
        specs: {
            cpu: 'Intel Core i7-7700K',
            gpu: 'Asus ROG Strix GTX 1060-6GB Gaming OC',
            motherboard: 'Asus TUF Z270 Mark 2',
            ram: '4x Corsair Vengeance Pro RGB 8GB DDR4-2666',
            case: 'Lian Li PC-O11 Dynamic',
            cooler: 'Corsair H100i Platinum RGB'
        },
        images: [
            '/static/cbox3.jpg',
            '/static/cbox2.jpg'
        ]
    }
];

export default productData;