function formatData(data) {
  const formatted = {
    id: data.id,
    updated: data.updated,
  };

  for (const key in data) {
    if (key !== 'id' && key !== 'updated') {
      const [prefix, ...rest] = key.split('_');
      const objKey = rest.join('_');
      if (!formatted[prefix]) {
        formatted[prefix] = {};
      }

      formatted[prefix][objKey] = data[key];
    }
  }

  return formatted;
}

export const currentMachinesState = (dataArray) => {
  let latestObject = dataArray.reduce((maxObject, currentObject) => {
    const maxDate = new Date(maxObject.updated);
    const currentDate = new Date(currentObject.updated);
    return maxDate >= currentDate ? maxObject : currentObject;
  }, dataArray[0]);
  latestObject = formatData(latestObject);
  return latestObject;
};
