import { parse } from "date-fns";

export function formattedDate(data: string, hour: string){
  const dataString = `${data} ${hour}`;
  return parse(dataString, 'yyyy-MM-dd HH:mm', new Date());

}
