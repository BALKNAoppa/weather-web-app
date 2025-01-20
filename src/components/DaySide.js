export const DaySide = (props) => {
    const { weather, weatherLoading } = props;
    console.log(weather)
    const getDayWeatherIcon = (condition) => {
        const lowerCondition = condition.toLowerCase();
        if (lowerCondition.includes("clear")) {
            return "./img/icons/Day Sun.png";
        } else if (lowerCondition.includes("sunny")) {
            return "./img/icons/Day Sun.png";
        } else if (lowerCondition.includes("cloudy")) {
            return "./img/icons/Day Clouds.png";
        } else if (lowerCondition.includes("rain")) {
            return "./img/icons/Day Rain.png";
        } else if (lowerCondition.includes("snow")) {
            return "./img/icons/Day Snow.png"
        } else if (lowerCondition.includes("storm")) {
            return "./img/icons/Day Storm.png"
        } else if (lowerCondition.includes("wind")) {
            return "./img/icons/Day Wind.png"
        } else {
            return "./img/icons/Day Sun.png";
        }
    };

    if (weatherLoading) {
        return <p>Loading...</p>
    }

    return (
        <div class="w-[414px] h-[828px] flex flex-col items-center justify-center relative" >
            <div class="w-[174px] h-[91px] absolute top-[56px] left-[40px]">
                <div class="text-[#6b727f] text-[18px] font-medium leading-[24.59px]">{weather.date}</div>
                <div class="text-[48px] font-extrabold leading-[65.57px]">{weather.cityname}</div>
            </div>
            <img class="w-[32px] h-[32px] absolute top-[85px] right-[40px]" src="./img/localization_icon.png"/>
            <img class="w-[274.09px] h-[274.09px] absolute top-[204px]" src={getDayWeatherIcon(weather.condition)} alt="" />
            <div class="w-[360px] h-[230px] absolute bottom-[128px] z-[999]">
                <div class="text-[120px] font-extrabold leading-[196.7px] bg-gradient-to-r from-[#111827] to-[#6b727f] bg-clip-text text-transparent">{weather.max_c}°</div>
                <div class="text-[24px] font-extrabold leading-[32.78px] text-[#ff8e27]" >{weather.condition}</div>
            </div>
        </div>
    );
};