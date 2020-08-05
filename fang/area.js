function area(map) {
    var circle1 = new AMap.Circle({
        center: new AMap.LngLat(121.473695, 31.230495),     // 圆心位置
        radius: 2700,                                       // 圆半径
        fillColor: 'red',                                   // 圆形填充颜色
        fillOpacity: 0.1,                                   // 填充颜色透明度
        strokeColor: '#fff',                                // 描边颜色
        strokeWeight: 0,                                    // 描边宽度
    });

    map.add(circle1);

    var circle2 = new AMap.Circle({
        center: new AMap.LngLat(121.473695, 31.230495),     // 圆心位置
        radius: 5000,                                       // 圆半径
        fillColor: 'red',                                   // 圆形填充颜色
        fillOpacity: 0.1,                                   // 填充颜色透明度
        strokeColor: '#fff',                                // 描边颜色
        strokeWeight: 0,                                    // 描边宽度
    });

    map.add(circle2);

    var circle3 = new AMap.Circle({
        center: new AMap.LngLat(121.473695, 31.230495),     // 圆心位置
        radius: 8800,                                       // 圆半径
        fillColor: 'red',                                   // 圆形填充颜色
        fillOpacity: 0.1,                                   // 填充颜色透明度
        strokeColor: '#fff',                                // 描边颜色
        strokeWeight: 0,                                    // 描边宽度
    });

    map.add(circle3);
}