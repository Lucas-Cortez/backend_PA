export interface ICreateLineDTO {
  name: string;
  description?: string;
  stops: { order: number; id_stop: number }[];
}
