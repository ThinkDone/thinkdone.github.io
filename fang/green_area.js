function green_area(map, data) {
    for (var i = 0; i < data.length; i++){
        var circle = new AMap.Circle({
            center: new AMap.LngLat(data[i]['lng'], data[i]['lat']),    // 圆心位置
            radius: 700,                                                // 圆半径
            fillColor: 'green',                                         // 圆形填充颜色
            fillOpacity: 0.1,                                           // 填充颜色透明度
            strokeColor: '#fff',                                        // 描边颜色
            strokeWeight: 0,                                            // 描边宽度
        });

        map.add(circle);
    }
}