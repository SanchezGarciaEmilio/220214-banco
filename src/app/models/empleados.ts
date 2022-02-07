// Modelos de empleados

export abstract class Empleado {
    public _id: string; //DNI del empleado
    public _nombre: string;
    public _telefono: { movil: string, fijo: string | null };
    public _direccion: Array<direccion>;
    public _iban: string; //Tipo string ya que no es un valor con el que se operará
    public _sueldo: number; //Sueldo base
    public _fecha: Date; //Fecha de incorporacion

    public constructor(id: string,
        nombre: string,
        telefono: { movil: string, fijo: string | null },
        direccion: Array<direccion>,
        iban: string,
        sueldo: number,
        fecha: Date) {
        this._id = id;
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._iban = iban;
        this._sueldo = sueldo;
        this._fecha = fecha;
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
    get iban() {
        return this._iban
    }
    get sueldo() {
        return this._sueldo
    }
    get fecha() {
        return this._fecha
    }

    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `DNI: ${this._id}
                Nombre: ${this._nombre}
                Telefono/s: ${this._telefono}
                Direccion/es: ${this._direccion}
                IBAN: ${this._iban}
                Sueldo base: ${this._sueldo}
                Fecha de incorporacion: ${this._fecha}`
    }

    //Calculo del sueldo
    salario(): number {
        let salario: number
        let salarioBase: number = this._sueldo
        let fecha: Date = this._fecha
        let fecha1: Date = new Date('January 1, 2015')
        let fecha2: Date = new Date('January 1, 2000')

        if (fecha >= fecha1) {
            salario = salarioBase * 1.02
        } else {
            if (fecha > fecha2) {
                salario = salarioBase * 1.03
            } else {
                salario = salarioBase * 1.05
            }
        }

        return Math.round(salario)
    }
}

export type direccion = {
    numero: string,
    calle: string,
}

export class Directivo extends Empleado {
    public _nivel: string; //Niveles: A1, A2, B1, B2, C1, C2
    public constructor(id: string,
        nombre: string,
        telefono: { movil: string, fijo: string | null },
        direccion: Array<direccion>,
        iban: string,
        sueldo: number,
        fecha: Date,
        nivel: string) {
        super(id, nombre, telefono, direccion, iban, sueldo, fecha);
        this._nivel = nivel;
    }

    /*---------------Get y set---------------*/

    get nivel() {
        return this._nivel
    }

    /*---------------Métodos---------------*/

    //Todo
    override todo() {
        return `${super.todo()}
                Nivel: ${this._nivel}`
    }

    //Calculo del sueldo
    override salario(): number {
        let salario: number = super.salario()
        let nivel: string = this._nivel

        if (nivel == "A1") {
            salario = salario + 110
        } else if ( nivel == "A2") {
            salario = salario + 130
        } else if ( nivel == "B1") {
            salario = salario + 220
        } else if ( nivel == "B2") {
            salario = salario + 240
        } else if ( nivel == "C1") {
            salario = salario + 350
        } else if ( nivel == "C2") {
            salario = salario + 500
        }

        return Math.round(salario)
    }
}

export class Limpiador extends Empleado {
    public _empresa: string; //Subcontrata de los limpiadores
    public constructor(id: string,
        nombre: string,
        telefono: { movil: string, fijo: string | null },
        direccion: Array<direccion>,
        iban: string,
        sueldo: number,
        fecha: Date,
        empresa: string) {
        super(id, nombre, telefono, direccion, iban, sueldo, fecha);
        this._empresa = empresa;
    }

    /*---------------Get y set---------------*/

    get empresa() {
        return this._empresa
    }

    /*---------------Métodos---------------*/

    //Todo
    override todo() {
        return `${super.todo()}
                Empresa: ${this._empresa}`
    }

    //Calculo del sueldo
    override salario(): number {
        let salario: number = super.salario()
        let empresa: string = this._empresa

        if (empresa == "Powlowski Group") {

        } else if (empresa == "Mitchell and Sons") {

        }

        return Math.round(salario)
    }
}

export class Comercial extends Empleado {
    public _horas: number;
    public constructor(id: string,
        nombre: string,
        telefono: { movil: string, fijo: string | null },
        direccion: Array<direccion>,
        iban: string,
        sueldo: number,
        fecha: Date,
        horas: number) {
        super(id, nombre, telefono, direccion, iban, sueldo, fecha);
        this._horas = horas;
    }

    /*---------------Get y set---------------*/

    get horas() {
        return this._horas
    }


    /*---------------Métodos---------------*/

    //Todo
    override todo() {
        return `${super.todo()}
                Horas: ${this._horas}`
    }

    //Calculo del sueldo
    override salario(): number {
        let salario: number = super.salario()
        let horas: number = this._horas
        let horasExtra: number

        //si trabaja menos de las horas estipuladas se hace una pequeña reducción de su salario
        if (horas < 160) { 
            salario = salario - (salario * 0.01)

        //se da un aumento por hora trabajada por encima de lo mínimo
        } else {
            horasExtra = 160 - horas
            salario = salario + (horasExtra * 12) 
        }

        return Math.round(salario)
    }
}


//Tipos
export type tDirectivo = {
    _id: string | null;
    _tipoObjeto: string | null;
    _nombre: string | null;
    _telefono: { movil: string, fijo: string| null } | null;
    _direccion: direccion[] | null;
    _iban: string | null;
    _sueldo: number | null;
    _fecha: Date | null;
    _nivel: string | null;
  };

  export type tLimpiador = {
    _id: string | null;
    _tipoObjeto: string | null;
    _nombre: string | null;
    _telefono: { movil: string, fijo: string| null } | null;
    _direccion: direccion[] | null;
    _iban: string | null;
    _sueldo: number | null;
    _fecha: Date | null;
    _empresa: string | null;
  };

  export type tComercial = {
    _id: string | null;
    _tipoObjeto: string | null;
    _nombre: string | null;
    _telefono: { movil: string, fijo: string | null } | null;
    _direccion: direccion[] | null;
    _iban: string | null;
    _sueldo: number | null;
    _fecha: Date | null;
    _horas: number | null;
    _minimo: boolean | null;
  };