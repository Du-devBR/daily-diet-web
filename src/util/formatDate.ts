import { format, parse, parseISO } from "date-fns";

export function formattedDateForSend(data: string, hour: string){
  const dataString = `${data}T${hour}:00-03:00`;
  const parsedDate = parse(dataString, 'yyyy-MM-dd\'T\'HH:mm:ssXXX', new Date());
  return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX");

}

export function formattedHour(apiDate: string): string {
  const date = parseISO(apiDate);
  const formattedDate = format(date, "HH:mm");
  return formattedDate;
}


export function  formattedDate(apiDate: string){
  const date = parseISO(apiDate);
  const formattedDate = format(date, "dd.MM.yy");
  return formattedDate;
}


export function sliceToDate(createdAt: string){
  const dateString = createdAt.split("T")

  const sliceDate = {
    date: dateString[0],
    hour: dateString[1].substring(0, 5)
  }

  return sliceDate
}

export function formattedDataAndHour(createdAt: string){
  if(createdAt){
    const sliceCreated = createdAt.replace(/-03$/, '0')
    const newDateCreated = new Date(sliceCreated)

    return format(newDateCreated, 'dd/MM/yyyy \'às\' HH:mm')
  }
}
