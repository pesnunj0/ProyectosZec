
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[HorasExtraConsumidas]")]
    [DisplayName("Horas Extra Consumidas"), InstanceName("Horas Extra Consumidas")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Admin")]
    [InsertPermission("Kairos:Admin")]
    [DeletePermission("Kairos:Admin")]
    public sealed class HorasExtraConsumidasRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Extra"), Column("idHoraExtra"), ForeignKey("[dbo].[KRS_HorasExtrasCalculadasCabecera]", "id"), LeftJoin("jIdHoraExtra"), TextualField("IdHoraExtraDia")]
        public Int64? IdHoraExtra
        {
            get { return Fields.IdHoraExtra[this]; }
            set { Fields.IdHoraExtra[this] = value; }
        }

        [DisplayName("Id Empleado"), Expression("jIdHoraExtra.idEmpleado"), ForeignKey("[dbo].Krs_Empleados", "Id"), LeftJoin("jEmpleados")]

        public Int64? IdEmpleado
        {
            get { return Fields.IdEmpleado[this]; }
            set { Fields.IdEmpleado[this] = value; }
        }

        [DisplayName("Empleado"), Expression("jEmpleados.[Nombre]"), QuickSearch]
        public String Empleado
        {
            get { return Fields.Empleado[this]; }
            set { Fields.Empleado[this] = value; }
        }

        [DisplayName("Tiempo"), Column("tiempo"), Size(4), Scale(2)]
        public Decimal? Tiempo
        {
            get { return Fields.Tiempo[this]; }
            set { Fields.Tiempo[this] = value; }
        }

        [DisplayName("Dia"), Column("dia")]
        public DateTime? Dia
        {
            get { return Fields.Dia[this]; }
            set { Fields.Dia[this] = value; }
        }

        [DisplayName("Fecha Autorizacion"), Column("fecha_autorizacion")]
        public DateTime? FechaAutorizacion
        {
            get { return Fields.FechaAutorizacion[this]; }
            set { Fields.FechaAutorizacion[this] = value; }
        }

        [DisplayName("Id Hora Extra Codigo Cliente"), Expression("jIdHoraExtra.[codigoCliente]")]
        public Int64? IdHoraExtraCodigoCliente
        {
            get { return Fields.IdHoraExtraCodigoCliente[this]; }
            set { Fields.IdHoraExtraCodigoCliente[this] = value; }
        }

        [DisplayName("Id Hora Extra Id Empleado"), Expression("jIdHoraExtra.[idEmpleado]")]
        public Int64? IdHoraExtraIdEmpleado
        {
            get { return Fields.IdHoraExtraIdEmpleado[this]; }
            set { Fields.IdHoraExtraIdEmpleado[this] = value; }
        }

        [DisplayName("Id Hora Extra Fecha"), Expression("jIdHoraExtra.[fecha]")]
        public DateTime? IdHoraExtraFecha
        {
            get { return Fields.IdHoraExtraFecha[this]; }
            set { Fields.IdHoraExtraFecha[this] = value; }
        }

        [DisplayName("Id Hora Extra Id Hora Extra Cabecera"), Expression("jIdHoraExtra.[idHoraExtraCabecera]")]
        public Int64? IdHoraExtraIdHoraExtraCabecera
        {
            get { return Fields.IdHoraExtraIdHoraExtraCabecera[this]; }
            set { Fields.IdHoraExtraIdHoraExtraCabecera[this] = value; }
        }

        [DisplayName("Id Hora Extra Tipo"), Expression("jIdHoraExtra.[tipo]")]
        public Int32? IdHoraExtraTipo
        {
            get { return Fields.IdHoraExtraTipo[this]; }
            set { Fields.IdHoraExtraTipo[this] = value; }
        }

        [DisplayName("Id Hora Extra Total Horas Extras Reales"), Expression("jIdHoraExtra.[totalHorasExtrasReales]")]
        public Decimal? IdHoraExtraTotalHorasExtrasReales
        {
            get { return Fields.IdHoraExtraTotalHorasExtrasReales[this]; }
            set { Fields.IdHoraExtraTotalHorasExtrasReales[this] = value; }
        }

        [DisplayName("Id Hora Extra Total Horas Extras Convertidas"), Expression("jIdHoraExtra.[totalHorasExtrasConvertidas]")]
        public Decimal? IdHoraExtraTotalHorasExtrasConvertidas
        {
            get { return Fields.IdHoraExtraTotalHorasExtrasConvertidas[this]; }
            set { Fields.IdHoraExtraTotalHorasExtrasConvertidas[this] = value; }
        }

        [DisplayName("Id Hora Extra Id Ausencia Programada Tipo"), Expression("jIdHoraExtra.[idAusenciaProgramadaTipo]")]
        public Int64? IdHoraExtraIdAusenciaProgramadaTipo
        {
            get { return Fields.IdHoraExtraIdAusenciaProgramadaTipo[this]; }
            set { Fields.IdHoraExtraIdAusenciaProgramadaTipo[this] = value; }
        }

        [DisplayName("Id Hora Extra Dia"), Expression("jIdHoraExtra.[dia]")]
        public String IdHoraExtraDia
        {
            get { return Fields.IdHoraExtraDia[this]; }
            set { Fields.IdHoraExtraDia[this] = value; }
        }

        [DisplayName("Id Hora Extra Estado"), Expression("jIdHoraExtra.[estado]")]
        public String IdHoraExtraEstado
        {
            get { return Fields.IdHoraExtraEstado[this]; }
            set { Fields.IdHoraExtraEstado[this] = value; }
        }

        [DisplayName("Id Hora Extra Motivo Cancelacion"), Expression("jIdHoraExtra.[motivoCancelacion]")]
        public String IdHoraExtraMotivoCancelacion
        {
            get { return Fields.IdHoraExtraMotivoCancelacion[this]; }
            set { Fields.IdHoraExtraMotivoCancelacion[this] = value; }
        }

        [DisplayName("Id Hora Extra Fecha Aceptacion Cancelacion"), Expression("jIdHoraExtra.[fechaAceptacionCancelacion]")]
        public DateTime? IdHoraExtraFechaAceptacionCancelacion
        {
            get { return Fields.IdHoraExtraFechaAceptacionCancelacion[this]; }
            set { Fields.IdHoraExtraFechaAceptacionCancelacion[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HorasExtraConsumidasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field IdHoraExtra;
            public DecimalField Tiempo;
            public DateTimeField Dia;
            public DateTimeField FechaAutorizacion;

            public Int64Field IdHoraExtraCodigoCliente;
            public Int64Field IdHoraExtraIdEmpleado;
            public DateTimeField IdHoraExtraFecha;
            public Int64Field IdHoraExtraIdHoraExtraCabecera;
            public Int32Field IdHoraExtraTipo;
            public DecimalField IdHoraExtraTotalHorasExtrasReales;
            public DecimalField IdHoraExtraTotalHorasExtrasConvertidas;
            public Int64Field IdHoraExtraIdAusenciaProgramadaTipo;
            public StringField IdHoraExtraDia;
            public StringField IdHoraExtraEstado;
            public StringField IdHoraExtraMotivoCancelacion;
            public DateTimeField IdHoraExtraFechaAceptacionCancelacion;
            public Int64Field IdEmpleado;
            public StringField Empleado;
        }
    }
}
