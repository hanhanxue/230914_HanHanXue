
import Picturez from '../../../../public/images/home/231002_X_LightSwitch.jpg'
import DefaultBlur from './components/static/defaultBlur'
import StaticPlaiceholderBlur from './components/static/plaiceholder/blur'
import StaticPlaiceholderColor from './components/static/plaiceholder/color'
import DynamicPlaiceholderBlur from './components/dynamic/blur'
import DynamicPlaiceholderColor from './components/dynamic/color'
import CustomOpacity from './components/custom/opacity'
import CustomSlide from './components/custom/slide'

import styles from './ImagePlaceholder.module.scss'



const ImagePlaceholder = () => {


    return (
        <>
        <div className={styles.section}>
        <h1>Static Import</h1>
        <div className={styles.images}>
        <DefaultBlur src={Picturez} />
        </div>
    </div>

    <div className={styles.section}>
        <h1>Static Import with Placeholder</h1>
        <div className={styles.images}>
        <StaticPlaiceholderBlur src='/images/home/231002_X_LightSwitch.jpg' />
        <StaticPlaiceholderColor src='/images/home/231002_X_LightSwitch.jpg' />
        </div>
    </div>

    <div className={styles.section}>
        <h1>Dynamic Import with Placeholder</h1>
        <div className={styles.images}>
        <DynamicPlaiceholderBlur src={'https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80'}/>
        <DynamicPlaiceholderColor src={'https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80'}/>
        </div>
    </div>

    <div className={styles.section}>
        <h1>Custom in-view animations</h1>
        <div className={styles.images}>
        <CustomOpacity src={'https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80'}/>
        <CustomSlide src={'https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80'}/>
        </div>
    </div>

        
        </>



    )
}


export default ImagePlaceholder