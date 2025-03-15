export const selectAll = (boolMap: any) => {
    const allMap = Object.fromEntries(
        Object.keys(boolMap).map(key => [key, true])
      );
    return allMap
}

export const deselectAll = (boolMap: any) => {
    const noneMap = Object.fromEntries(
        Object.keys(boolMap).map(key => [key, false])
      );
    return noneMap
}