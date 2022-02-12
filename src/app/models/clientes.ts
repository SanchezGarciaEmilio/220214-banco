// Modelos de clientes

export abstract class Cliente {
    public _id: string; //DNI del cliente o CIF de la empresa
    public _nombre: string; //del cliente o la empresa
    public _telefono: string;
    public _direccion: { numero: string, calle: string };
    public _capital: number;
    public _ingresos: number; //ingresos anuales

    public constructor(id: string,
        nombre: string,
        telefono: string,
        direccion: { numero: string, calle: string },
        capital: number,
        ingresos: number) {
        this._id = id,
            this._nombre = nombre,
            this._telefono = telefono,
            this._direccion = direccion,
            this._capital = capital,
            this._ingresos = ingresos
    }

    /*---------------Get y set---------------*/

    get id() {
        return this._id
    }
    get nombre() {
        return this._nombre
    }
    get telefono() {
        return this._telefono
    }
    get direccion() {
        return this._direccion
    }
    get capital() {
        return this._capital
    }
    get ingresos() {
        return this._ingresos
    }


    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `DNI: ${this._id}\n
                Nombre: ${this._nombre}\n
                Telefono: ${this._telefono}\n
                Direccion: ${this._direccion}\n
                Capital: ${this._capital}\n
                Ingresos: ${this._ingresos}\n`
    }

    //Calculo de la renta
    renta(): number {
        let capital = this._capital
        let ganancias: number

        //Dependiendo del capital invertiremos más o menos dinero
        if (capital < 100000) {
            ganancias = capital - (capital * 0.97)
        } else if (capital < 500000) {
            ganancias = capital - (capital * 0.98)
        } else {
            ganancias = capital - (capital * 0.99)
        }

        return ganancias
    }
}

export class Empresa extends Cliente {
    public _plan: string; //plan financiero (1, 2 ó 3)

    public constructor(id: string,
        nombre: string,
        telefono: string,
        direccion: { numero: string, calle: string },
        capital: number,
        ingresos: number,
        plan: string) {
        super(id, nombre, telefono, direccion, capital, ingresos)
        this._plan = plan
    }

    /*---------------Get y set---------------*/

    get plan() {
        return this._plan
    }

    /*---------------Métodos---------------*/

    //Todo
    override todo() {
        return `${super.todo()}\n
                Plan: ${this._plan}`
    }

    //Calculo de la renta
    override renta(): number {
        let ganacias: number = super.renta()
        let plan: string = this._plan

        if (plan == "1") {
            ganacias = ganacias + (ganacias * 0.01)
        } else if (plan == "2") {
            ganacias = ganacias + ((ganacias * 0.05) / 2)
        } else if (plan == "3") {
            ganacias = ganacias - 100000
        }

        return ganacias
    }
}

export class Persona extends Cliente {
    public _comercial: string; //comercial asignado a él

    public constructor(id: string,
        nombre: string,
        telefono: string,
        direccion: { numero: string, calle: string },
        capital: number,
        ingresos: number,
        comercial: string) {
        super(id, nombre, telefono, direccion, capital, ingresos)
        this._comercial = comercial
    }

    /*---------------Get y set---------------*/

    get comercial() {
        return this._comercial
    }


    /*---------------Métodos---------------*/

    //Todo
    override todo() {
        return `${super.todo()}\n
                Comercial: ${this._comercial}`
    }

    //Calculo de la renta
    override renta(): number {
        let ganancias: number = super.renta()
        let ingresos: number = super.ingresos

        //Cobramos un pequeño impuesto aquellos que ganen mas de 20.000€ al año
        if (ingresos > 20000) {
            ganancias = ganancias - (ganancias * 0.01)
        }

        return ganancias

    }
}


//Tipos
export type tPersona = {
    id: string;
    nombre: string;
    telefono: string;
    numero: string,
    calle: string;
    capital: number;
    ingresos: number;
    comercial: string;
}
export type tPersona2 = {
    _id: string;
    _nombre: string;
    _telefono: string;
    _direccion: {numero: string, calle: string}
    _capital: number;
    _ingresos: number;
    _comercial: string;
}

export type tEmpresa = {
    id: string;
    nombre: string;
    telefono: string;
    numero: string,
    calle: string;
    capital: number;
    ingresos: number;
    plan: string;
}

export type tRenta = {
    _id: string | null,
    _nombre: string | null,
    _renta: number | null
}

export class Renta {
    public _id: string;
    public _nombre: string;
    public _renta: number

    public constructor(id: string,
        nombre: string,
        renta: number,) {
        this._id = id
        this._nombre = nombre
        this._renta = renta
    }
}