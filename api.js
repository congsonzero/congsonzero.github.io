function API() {
    function getFlowers(callback) {
        // fetch data from https://google.com/flowers/metadata
        const rawData = `{"autumns":[{"src":"https://images.wallpaperscraft.com/image/hydrangea_flower_autumn_dry_113504_800x600.jpg","alt":"Hydragea flower autumn"},{"src":"https://cdn.wallpapersafari.com/39/92/KY6AlV.jpg","alt":"Above the sky"},{"src":"https://a-static.besthdwallpaper.com/blue-asters-autumn-flower-wallpaper-800x600-53874_17.jpg","alt":"Blue Asters"}],"summers":[{"src":"https://images.wallpaperscraft.com/image/sunflower_flowers_summer_124368_800x600.jpg","alt":"Sun flower"},{"src":"https://lh3.googleusercontent.com/proxy/gpMSJPuPxDuQvfGes9IiktKQZUgtUNWvnkckd_U3BX86EhJWIeOnoLVz3_EQAazy_HIPOav3WBNcOPaIp2MDs9HHCQeuvf7ubfvU3vQzMAF_ul9DmsXSeqiRyUMjx5wDrp_ie69SNg","alt":"Blooming flower"},{"src":"https://cdn.wallpapersafari.com/20/75/X4fURB.jpg","alt":"Purple flower"}],"springs":[{"src":"https://images.wallpaperscraft.com/image/sakura_flowers_bloom_125940_800x600.jpg","alt":"Sakura"},{"src":"https://visualparadox.com/images/no-linking-allowed-main/lilies800.jpg","alt":"Lilies"},{"src":"https://data.1freewallpapers.com/download/daffodils-white-flowers-spring-800x600.jpg","alt":"Fairy"}]}`;
        const response = {
            headers: {
                statusCode: 200,
            },
            body: rawData,
        };
        callback(response);
    }

    function getImageByWeather(weather, dataSource) {
        const weatherMap = {
            "autumn": "autumns",
            "spring": "springs",
            "summer": "summers"
        };

        const targetKey = weatherMap[weather];
        return dataSource[targetKey];
    }

    this.getFlowers = getFlowers;
    this.getImageByWeather = getImageByWeather;
}