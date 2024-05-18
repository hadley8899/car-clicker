export const formatNumber = (num: number): string => {
    if (num < 1000) return num.toString();
    const units = ["K", "M", "B", "T"];
    const unit = Math.floor((num.toString().length - 1) / 3) * 3;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const scaled = num / ("1e" + unit);
    return scaled.toFixed(1) + units[Math.floor(unit / 3) - 1];
};