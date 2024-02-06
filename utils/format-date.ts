export default function formatDate(date: string) {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);

    return formattedDate;
}
