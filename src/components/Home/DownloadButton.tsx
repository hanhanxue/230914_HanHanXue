import styles from './DownloadButton.module.scss'


const DownloadButton = () => {


    return (
        <button className={`${styles.downloadButton}`}>
        <span className={`${styles.downloadButtonIconMask}`}></span>
        
        {/* <span className={`body-base   ${styles.downloadButtonLabel}`}>Project Files</span> */}
        {/* <svg className={`${styles.downloadButtonIcon}`}
        width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M22 6H10V16H4L16 28L28 16H22V6Z"/>
        </svg> */}

        
        </button>
    )
}

export default DownloadButton