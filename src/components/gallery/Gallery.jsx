import './gallery.css'

export default function Gallery(){
    return(
        <div className='gallery' id='gallery'>
            <div className='gallery-grid'>
                <div className='img1'><div className='overlay'></div></div>
                <div className='img2'><div className='overlay'></div></div>
                <div className='img3'><div className='overlay'></div></div>
                <div className='img4'><div className='overlay'></div></div>
                <div className='img5'><div className='overlay'></div></div>
            </div>
        </div>
    );
}