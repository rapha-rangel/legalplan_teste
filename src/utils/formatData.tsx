export function FormatData () {
	const weekDay:string[] =[];
	const mounthArr: string[] =[];
	const timeElapsed = Date.now();
	const data = new Date(timeElapsed);
	const date =data.getDate();
	const year =data.getFullYear();
	const weekDayArr=["Domingo", "Segunda", "Terça", "Quarta", "Quinta","Sexta","Sabado"];
	const monthArr=[ 'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'];
	weekDayArr.map((day, index)=>{
		if(data.getDay() === index) weekDay.push(day)
	})
	monthArr.map((mounth, index)=>{
		if(data.getMonth() === index) mounthArr.push(mounth)
	})
	const text =`${weekDay[0]}, ${date} de ${mounthArr} de ${year}`;
	return text
}