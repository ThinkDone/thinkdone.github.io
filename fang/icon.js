function icon(map, data, img) {
    var vl = new Loca.IconLayer({
        map: map
    });

    vl.setData(data, {
        lnglat: 'location'
    });

    vl.setOptions({
        source: img,
        style: {
            size: 16
        }
    });

    vl.render();
}