import IconHeart from '../../../../components/IconHeart';
import IconSetting from '../../../../components/IconSetting';
import Button from '../../../../components/Button';

function Banner() {
    return (
        <div className="h-60 mt-5  rounded-xl bg-banner_img  bg-cover relative">
            <div className="right-7 bottom-2  absolute">
                <div className="mb-3  flex flex-col  text-white ">
                    <span className="font-Archivo_Black text-right text-xs bottom-4">Album</span>
                    <span className="font-Montserrat text-right text-xl">BigBang</span>
                    <span className="font-Karla text-right text-4xl ">Loser</span>
                </div>
                <div className="w-48 flex flex-row justify-between mb-3 content-center">
                    <IconSetting className="pt-1 h-6" />
                    <IconHeart className="pt-1 h-6" />
                    <Button className="h-8 bg-orange_red w-24 pt-1.5">Play</Button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
