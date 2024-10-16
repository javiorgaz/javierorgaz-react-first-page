import NavBar from './components/NavBar.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Card from './components/Card.jsx';
import React from 'react';



function App() {

   
    const img2 = "https://thumb.pccomponentes.com/w-530-530/articles/1081/10812735/1932-pccom-imperial-intel-core-i7-14700kf-32gb-2tb-ssd-rtx-4070-ti-super-comprar.jpg";
    const img3 = "https://thumb.pccomponentes.com/w-530-530/articles/1081/10812735/1932-pccom-imperial-intel-core-i7-14700kf-32gb-2tb-ssd-rtx-4070-ti-super-comprar.jpg";
    const img4 = "https://thumb.pccomponentes.com/w-530-530/articles/1081/10812735/1932-pccom-imperial-intel-core-i7-14700kf-32gb-2tb-ssd-rtx-4070-ti-super-comprar.jpg";
    const img5 = "https://thumb.pccomponentes.com/w-530-530/articles/1081/10812735/1932-pccom-imperial-intel-core-i7-14700kf-32gb-2tb-ssd-rtx-4070-ti-super-comprar.jpg";

    return(

        <div className='m-3'>

                <NavBar/>

            <div className='bg-body-secondary p-2 mt-5'>

                <Jumbotron/>

            </div>

            <div className='d-flex justify-content-center gap-3  mt-5'>

                <Card
                     img1 = "https://thumb.pccomponentes.com/w-530-530/articles/1081/10812735/1932-pccom-imperial-intel-core-i7-14700kf-32gb-2tb-ssd-rtx-4070-ti-super-comprar.jpg"
                     title1 = "Echo PC"
                     descripcion = "Descripcion del pc 1"
                />
                <Card
                     img1 = "https://thumb.pccomponentes.com/w-530-530/articles/1084/10846031/1706-pccom-ultimate-amd-ryzen-9-7900x3d-64gb-2tb-ssd-rtx-4080-super-windows-11-pro-comprar.jpg"
                     title1 = "Alpha PC"
                     descripcion = "descripcion del pc 2"
                />
                <Card
                     img1 = "https://thumb.pccomponentes.com/w-530-530/articles/1082/10827278/1219-pccom-studio-intel-core-i7-14700kf-32gb-2tb-ssd-rtx-4070-super-windows-11-pro.jpg"
                     title1 = "Beta PC"
                     descripcion = "descripcion del pc 3"
                />
                <Card
                     img1 = "https://thumb.pccomponentes.com/w-530-530/articles/1082/10820059/1329-pccom-ready-amd-ryzen-7-5800x-32gb-1tb-ssd-rtx-4060-ti-windows-11-home-blanco-comprar.jpg"
                     title1 = "Hotel PC"
                     descripcion = "descripcion del pc 4"
                />
                <Card
                     img1 = "https://thumb.pccomponentes.com/w-530-530/articles/1078/10789790/1613-pccom-ready-intel-core-i5-12400f-32gb-1tb-ssd-rtx-4060-ti-opiniones.jpg"
                     title1 = "India PC"
                     descripcion = "descripcion del pc 5"
                />
                
            </div>

            
        </div>
           
    );
}

export default App
