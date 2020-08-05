function point(map, data, radius=1.2, color='#9966CC') {
    var layer1 = new Loca.ScatterPointLayer({
        eventSupport: true,
        map: map
    });

    layer1.on('mousemove', function (ev) {
        // 事件类型
        var type = ev.type;
        // 当前元素的原始数据
        var rawData = ev.rawData;
        // 原始鼠标事件
        var originalEvent = ev.originalEvent;

        openInfoWin(map, originalEvent, {
            '名称': rawData.name,
        });
    });

    layer1.on('mouseleave', function (ev) {
        closeInfoWin();
    });

    // 传入原始数据
    layer1.setData(data, {
        lnglat: 'location'
    })

    // 配置样式
    layer1.setOptions({
        unit: 'px',
        style: {
            radius: 1.2,     // 圆形半径，单位像素
            color: color, // 填充颜色
            borderWidth: 0.5,   // 边框宽度
            borderColor: color  // 边框颜色
        },
        selectStyle: {
            radius: 14,
            color: '#FFF684'
        }
    });

    layer1.render();
}