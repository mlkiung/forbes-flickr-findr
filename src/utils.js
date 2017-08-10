const formatNewData = data => {
  return data.map(photo => {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
  })
}

export default formatNewData;
