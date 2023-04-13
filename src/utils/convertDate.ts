export const convertDate = (date: string | undefined) => {
	return new Date(date || '').toLocaleDateString('ru-RU')
}
