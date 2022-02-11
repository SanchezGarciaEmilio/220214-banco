export type tRegistro = {
    idComercial: string | null,
    idCliente: string | null,
    capitalCliente: number | null,
    prestamo: number | null
}

export class Registro {
    public _idComercial: string;
    public _idCliente: string;
    public _capitalCliente: number;
    public _prestamo: number;
    public _interes: number;
    public _plazo: Date;

    public constructor(id: string,
        idComercial: string,
        idCliente: string,
        capitalCliente: number,
        prestamo: number,
        interes: number,
        plazo: Date) {
        this._idComercial = idComercial
        this._idCliente = idCliente
        this._capitalCliente = capitalCliente
        this._prestamo = prestamo
        this._interes = interes
        this._plazo = plazo
    }
}
