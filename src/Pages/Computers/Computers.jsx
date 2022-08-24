import React,{useEffect,useState} from 'react';
import axios from "axios";
import AppBar from '../../Components/AppBar/AppBar';
import Card from '../../Components/Card/Card';

const Computers = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.
            get('http://localhost:8080/products/computers')
            .then(res => {
                console.log('database data:', res.data.data);
                setItems(res.data.data);
                console.log('new array:', items);
            })
            .catch(e => console.log(e));
    },[])

    {/*
    const items = [
        {
            title: 'Asus E410',
            image: img1,
            price: 100,
            type: 'computer',
            description: 'ASUS E410 Laptop. Enjoy everyday activity with this ASUS notebook PC. The Intel Celeron processor and 4GB of RAM allows you run programs smoothly on the 14-inch HD display. This ASUS notebook PC has 64GB eMMC that shortens load times and offers ample storage.',
            specs: [
                {spec: 'Intel Celeron N4020 Dual-Core Processor 1.1GHz Up to 2.8GHz / 4GB SDRAM / 64GB eMMC Storage'},
                {spec: '14-inch HD LED Display (1366 x 768) / Integrated Intel Graphics'},
                {spec: 'Webcam / Wi-Fi 802.11 / Stereo speakers'},
                {spec: '2 USB Type-A HDMI / Card reader / 1 headphone/microphone combo'},
                {spec: '3-cell Li-ion Battery / AC power adapter / Windows 10'}
            ],
        },
        {
            title: 'Asus 2',
            image: img2,
            price: 200,
            type: 'computer',
            description: 'This 15.6-inch Full HD display provides stunning visuals, while the AMD Ryzen 7 processor and 8GB of RAM power through everyday software and support smooth multitasking. This Wi-Fi and Bluetooth-enabled ASUS ZenBook laptop has a 256GB SSD for rapid boots',
            specs: [
                {spec: 'Intel Celeron N4020 Dual-Core Processor 1.1GHz Up to 2.8GHz / 4GB SDRAM / 64GB eMMC Storage'},
                {spec: '14-inch HD LED Display (1366 x 768) / Integrated Intel Graphics'},
                {spec: 'Webcam / Wi-Fi 802.11 / Stereo speakers'},
                {spec: '2 USB Type-A HDMI / Card reader / 1 headphone/microphone combo'},
                {spec: '3-cell Li-ion Battery / AC power adapter / Windows 10'}
            ],
        },
        {
            title: 'ASUS ROG',
            image: img3,
            price: 300,
            type: 'computer',
            description: 'Annihilate your competition with this ASUS ROG gaming desktop. The AMD Ryzen 7 processor and 16GB of RAM deliver rapid performance during fast-paced action, while the 1TB HDD and a 256GB SSD provide plenty of storage for large files and downloads. This Bluetooth-enabled ASUS ROG gaming computer features an NVIDIA GeForce RTX 3060 graphics card for tear-free rendering of 4K games',
            specs: [
                {spec: 'Intel Celeron N4020 Dual-Core Processor 1.1GHz Up to 2.8GHz / 4GB SDRAM / 64GB eMMC Storage'},
                {spec: '14-inch HD LED Display (1366 x 768) / Integrated Intel Graphics'},
                {spec: 'Webcam / Wi-Fi 802.11 / Stereo speakers'},
                {spec: '2 USB Type-A HDMI / Card reader / 1 headphone/microphone combo'},
                {spec: '3-cell Li-ion Battery / AC power adapter / Windows 10'}
            ]
        },
        {
            title: 'Dell',
            image: img4,
            price: 400,
            type: 'computer',
            description: 'Dell Laptop. Enjoy everyday activity with this Dell notebook PC. The Intel Celeron processor and 4GB of RAM allows you run programs smoothly on the 14-inch HD display. This ASUS notebook PC has 128GB eMMC that shortens load times and offers ample storage.',
            specs: [
                {spec: 'Dell 15.6 HD 1366x768 LED-backlit Display'},
                {spec: 'Intel Celeron N4020 CPU'},
                {spec: 'DDR4 4GB memory, 128GB M.2 PCIe NVMe SSD storage'},
                {spec: 'USB3.0'},
                {spec: 'Windows 10 Home'},
            ],
        },
        {
            title: 'Hp1',
            image: img5,
            price: 400,
            type: 'computer',
            description: 'Hp Laptop. Enjoy everyday activity with this Hp notebook PC. The Intel Celeron processor and 4GB of RAM allows you run programs smoothly on the 14-inch HD display. This ASUS notebook PC has 64GB eMMC that shortens load times and offers ample storage.',
            specs: [
                {spec: 'TAKE IT ANYWHERE – With its thin and light design, 6.5 millimeter micro-edge bezel display, and 82% screen to body ratio, you can take this PC anywhere and see more of what you love (1).'},
                {spec: 'REVOLUTIONARY ENTERTAINMENT – Enjoy ultra-wide viewing angles and seamlessly perform multi-monitor set-ups with a 15.6-inch, Full HD, IPS, micro-edge, and anti-glare display'},
                {spec: 'IMPESSIVE GRAPHICS – The Intel Iris Xe Graphics gives you a new level of performance with crisp, stunning visuals, plus the convenience of a thin and light laptop'},
                {spec: 'UNSTOPPABLE PERFORMANCE – Get things done fast with the 11th Generation Intel Core i5-1135G7 processor, which delivers instant responsiveness and best-in-class connectivity'},
                {spec: 'MEMORY AND STORAGE – Get up to 15x faster performance than a traditional hard drive with 256 GB PCIe NVMe M.2 SSD storage and experience improved multitasking with higher bandwidth thanks to 8 GB of RAM'},
            ],
        },
        {
            title: 'Hp2',
            image: img6,
            price: 500,
            type: 'computer',
            description: 'Hp Laptop. Enjoy everyday activity with this Hp notebook PC. The Intel Celeron processor and 4GB of RAM allows you run programs smoothly on the 14-inch HD display. This ASUS notebook PC has 64GB eMMC that shortens load times and offers ample storage.',
            specs: [
                {spec: 'TAKE IT ANYWHERE – With its thin and light design, 6.5 millimeter micro-edge bezel display, and 82% screen to body ratio, you can take this PC anywhere and see more of what you love'},
                {spec: 'UNSTOPPABLE PERFORMANCE – Get things done fast with the 11th Generation Intel Core i5-1135G7 processor, which delivers instant responsiveness and best-in-class connectivity'},
                {spec: 'MEMORY AND STORAGE – Get up to 15x faster performance than a traditional hard drive with 256 GB PCIe NVMe M.2 SSD storage and experience improved multitasking with higher bandwidth thanks to 8 GB of RAM'},
                {spec: 'WORK ON THE GO – Get work done on the go with a long battery life of up to 7 hours and 15 minutes (6), while HP Fast Charge lets you go from 0 to 50% charge in approximately 45 minutes'},
                {spec: 'OS AND WARRANTY – Do more with greater peace of mind thanks to the familiar feel of the Windows 10 Home operating system and the HP 1-year limited hardware warranty'},
            ],
        },
        {
            title: 'Hp3',
            image: img7,
            price: 600,
            type: 'computer',
            description: 'Game like a pro with this ROG STRIX Advantage Edition. Double up on AMD firepower with Ryzen 9-5980HX CPU and Radeon RX6800M GPU featuring exclusive AMD SmartShift and Smart Access Memory technology that dynamically boosts performance for any task. Enjoy eSports speed on 165hz QHD simply with FreeSync premium enabling ultrasmooth gameplay.',
            specs: [
                {spec: '15.6" diagonal, HD (1366 x 768), micro-edge, BrightView, 220 nits, 45% NTSC, Intel Pentium Silver N5000 (1.1 GHz base frequency, up to 2.7 GHz burst frequency, 4 MB cache, 4 cores)'},
                {spec: '128GB SATA M.2 SSD, 4GB DDR4-2400 SDRAM (1 x 4 GB)'},
                {spec: 'Optical drive not included, Integrated 10/100/1000 GbE LAN, 1 multi-format SD media card reader'},
                {spec: 'Realtek RTL8821CE 802.11a/b/g/n/ac (1x1) Wi-Fi and Bluetooth 4.2 combo, 1 USB 3.1 Gen 1 Type-C (Data Transfer Only, 5 Gb/s signaling rate); 2 USB 3.1 Gen 1 Type-A (Data Transfer Only); 1 RJ-45; 1 AC smart pin; 1 HDMI 1.4b; 1 headphone/microphone combo'},
                {spec: 'HP True Vision 720p HD camera with integrated dual array digital microphones, Windows 10 Home in S mode'},
            ],
        },
        {
            title: 'Lenovo1',
            image: img8,
            price: 700,
            type: 'computer',
            description: ' Stay productive and entertained with this Lenovo 14.0-inch Chromebook notebook',
            specs: [
                {spec: 'Slim and light, the Lenovo 14.0-inch Chromebook is powered by an Intel Core i3-1005G1 Processor with 4GB DDR4 RAM, 128GB M.2 SSD storage, and Integrated Intel UHD Graphics'},
                {spec: 'Get more from your entertainment with Dolby Audio and enjoy crystal-clear sound whether you re watching a video, streaming music, or video-chatting  you re sure to love what you hear on the IP 3 laptop'},
                {spec: 'See more and do more on the 14-inch FHD screen. A narrow bezel on 2 sides makes for a clean design and larger display, giving you more viewing area and less clutter'},
                {spec: 'Keep your privacy intact and get peace of mind when you need it with a physical shutter on your 720p webcam with dual microphones'},
                {spec: 'Stay connected with 2x2 WiFi (802.11 ac), Bluetooth 5.0, 2 x USB 3.0, USB 2.0, 3.5mm combo audio and DC jack, HDMI, and SD card reader'},
            ],
        },
        {
            title: 'Lenovo2',
            image: img9,
            price: 800,
            type: 'computer',
            description: 'Lenovo Laptop. Enjoy everyday activities with this lenovo notebook PC. The Intel Core i3 processor and 8GB of RAM let you run programs smoothly, on the 15.6-inch FHD Touchscreen display. This ASUS notebook PC has 256GB SSD that shortens load times and offers ample storage',
            specs: [
                {spec: 'Powered by an AMD Ryzen 5 5500U mobile processor with Radeon graphics, this portable notebook computer has 16GB DDR4 RAM and 256GB NVMe SSD Storage'},
                {spec: 'Reduce the clutter - The Flex 5 14 touchscreen laptop has a narrow bezel on 4 sides for more viewing area and less clutter on the IPS FHD (1920 x 1080) display'},
                {spec: 'Designed to keep your ideas flowing, anywhere, anytime with the ability to multi-mode, this Windows laptop has a 360⁰ hinge so you can use it in laptop mode for everyday computing, tent mode for sharing, stand mode for binge-watching your favorite streaming shows, or tablet mode for easy interaction'},
                {spec: 'A physical shutter on the webcam improves your privacy, allowing you to keep out unwanted attention'},
                {spec: 'Stay connected with integrated 2x2 WiFi 6 (802.11AX), Bluetooth 5, 2 USB-A ports, 1 USB-C with PD to support power charging, HDMI, a 4-in-1 card reader, and an audio jack'}
            ]
        }
    ]
    */}
    

    return (
        <>
            <AppBar />
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1100px', margin: 'auto', padding: '10px' }}>
                <h1 style={{ marginLeft: '20px', fontFamily: 'Roboto, sans-serif' }}>Computers</h1>
                {/*
                <div style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
                    <Card img={img1} title={title1} price={price1} type={productType}></Card>
                    <Card img={img2} title={title2} price={price2} type={productType}></Card>
                    <Card img={img3} title={title3} price={price3} type={productType}></Card>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
                    <Card img={img4} title={title4} price={price4} type={productType}></Card>
                    <Card img={img5} title={title5} price={price5} type={productType}></Card>
                    <Card img={img6} title={title6} price={price6} type={productType}></Card>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
                    <Card img={img7} title={title7} price={price7} type={productType}></Card>
                    <Card img={img8} title={title8} price={price8} type={productType}></Card>
                    <Card img={img9}title={title9} price={price9} type={productType}></Card>
                </div>
                */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => (
                            <Card key={index} 
                            id={item.id}
                            price={item.price} 
                            image={item.image} 
                            title={item.title}
                            spec1={item.spec1}  
                            spec2={item.spec2}  
                            spec3={item.spec3}  
                            spec4={item.spec4}  
                            spec5={item.spec5}
                            type={item.type} 
                            description={item.description} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Computers