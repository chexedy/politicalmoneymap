export function convertSQLTimetoText(sqlDateString: string): string {
    const date = new Date(sqlDateString + 'Z');
    return date.toLocaleString();
}