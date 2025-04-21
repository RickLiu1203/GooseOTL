export const unselectAllHelper = (boolMap: any) => {
    const noneMap = Object.fromEntries(
        Object.keys(boolMap).map(key => [key, false])
      );
    return noneMap
}