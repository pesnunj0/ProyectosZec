﻿
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[KRS_HorasExtrasCalculadasCabecera]")]
    [DisplayName("Extras"), InstanceName("Extras")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Modify")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]

    public sealed class ExtrasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Codigo Cliente"), Column("codigoCliente"), NotNull]
        public Int64? CodigoCliente
        {
            get { return Fields.CodigoCliente[this]; }
            set { Fields.CodigoCliente[this] = value; }
        }


        [DisplayName("Id Empleado"), Column("idEmpleado"), ForeignKey("[dbo].Krs_Empleados", "Id"), LeftJoin("jEmpleados")]

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

        [DisplayName("Dpto Id"), Expression("jEmpleados.[idDepartamento]"), ForeignKey("KRS_Departamentos", "id"), LeftJoin("jDepartamentos")]

        public Int32? DptoId
        {
            get { return Fields.DptoId[this]; }
            set { Fields.DptoId[this] = value; }
        }

        [DisplayName("Sede"), Expression("jDepartamentos.[SedeId]"), ForeignKey("sedes", "SedeId"), LeftJoin("jSede"), TextualField("Sede"), LookupInclude]
        [LookupEditor("Intranet.Sedes")]
        public Int32? SedeId
        {
            get { return Fields.SedeId[this]; }
            set { Fields.SedeId[this] = value; }
        }
        [DisplayName("Sede"), Expression("jSede.[Sede]")]
        public String Sede
        {
            get { return Fields.Sede[this]; }
            set { Fields.Sede[this] = value; }
        }

        [DisplayName("Fecha"), Column("fecha"), NotNull]
        public DateTime? Fecha
        {
            get { return Fields.Fecha[this]; }
            set { Fields.Fecha[this] = value; }
        }

        [DisplayName("Id Hora Extra Cabecera"), Column("idHoraExtraCabecera"), NotNull, ForeignKey("[dbo].[KRS_HorasExtrasCabecera]", "id"), LeftJoin("jIdHoraExtraCabecera"), TextualField("IdHoraExtraCabeceraCodigo")]
        public Int64? IdHoraExtraCabecera
        {
            get { return Fields.IdHoraExtraCabecera[this]; }
            set { Fields.IdHoraExtraCabecera[this] = value; }
        }

        [DisplayName("Tipo"), Column("tipo"), NotNull]
        public Int32? Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }

        [DisplayName("Reales"), Column("totalHorasExtrasReales"), Size(18), Scale(2), NotNull]
        public Decimal? TotalHorasExtrasReales
        {
            get { return Fields.TotalHorasExtrasReales[this]; }
            set { Fields.TotalHorasExtrasReales[this] = value; }
        }

        [DisplayName("Convertidas"), Column("totalHorasExtrasConvertidas"), Size(18), Scale(2), NotNull]
        public Decimal? TotalHorasExtrasConvertidas
        {
            get { return Fields.TotalHorasExtrasConvertidas[this]; }
            set { Fields.TotalHorasExtrasConvertidas[this] = value; }
        }

        [DisplayName("Conv. HH:mm"), Expression("CAST(FLOOR(totalHorasExtrasConvertidas) As VARCHAR(2))+':'+RIGHT('0'+ CAST(FLOOR((totalHorasExtrasConvertidas-FLOOR(totalHorasExtrasConvertidas))*60)AS VARCHAR(2)),2)")]
        public String Convertidas
        {
            get { return Fields.Convertidas[this]; }
            set { Fields.Convertidas[this] = value; }
        }

        [DisplayName("Id Ausencia Tipo"), Column("idAusenciaProgramadaTipo")]
        public Int64? IdAusenciaProgramadaTipo
        {
            get { return Fields.IdAusenciaProgramadaTipo[this]; }
            set { Fields.IdAusenciaProgramadaTipo[this] = value; }
        }

        [DisplayName("Dia"), Column("dia"), Size(1), QuickSearch]
        public String Dia
        {
            get { return Fields.Dia[this]; }
            set { Fields.Dia[this] = value; }
        }

        [DisplayName("EstadoId"), Column("estado"), Size(1), NotNull, ForeignKey("EstadosExtras", "EstadoId"), LeftJoin("jEstado"), LookupInclude]
        [LookupEditor("Kairos.EstadosExtras")]
        public String Estado
        {
            get { return Fields.Estado[this]; }
            set { Fields.Estado[this] = value; }
        }

        [DisplayName("Estado"), Expression("jEstado.[descripcion]")]
        public String EstadoDesc
        {
            get { return Fields.EstadoDesc[this]; }
            set { Fields.EstadoDesc[this] = value; }
        }

        [DisplayName("Motivo Cancelacion"), Column("motivoCancelacion"), Size(250)]
        public String MotivoCancelacion
        {
            get { return Fields.MotivoCancelacion[this]; }
            set { Fields.MotivoCancelacion[this] = value; }
        }

        [DisplayName("Fecha Aceptacion Cancelacion"), Column("fechaAceptacionCancelacion")]
        public DateTime? FechaAceptacionCancelacion
        {
            get { return Fields.FechaAceptacionCancelacion[this]; }
            set { Fields.FechaAceptacionCancelacion[this] = value; }
        }

        [DisplayName("Id Hora Extra Cabecera Codigo Cliente"), Expression("jIdHoraExtraCabecera.[codigoCliente]")]
        public Int64? IdHoraExtraCabeceraCodigoCliente
        {
            get { return Fields.IdHoraExtraCabeceraCodigoCliente[this]; }
            set { Fields.IdHoraExtraCabeceraCodigoCliente[this] = value; }
        }

        [DisplayName("Id Hora Extra Cabecera Codigo"), Expression("jIdHoraExtraCabecera.[codigo]")]
        public String IdHoraExtraCabeceraCodigo
        {
            get { return Fields.IdHoraExtraCabeceraCodigo[this]; }
            set { Fields.IdHoraExtraCabeceraCodigo[this] = value; }
        }

        [DisplayName("Id Hora Extra Cabecera Descripcion"), Expression("jIdHoraExtraCabecera.[descripcion]")]
        public String IdHoraExtraCabeceraDescripcion
        {
            get { return Fields.IdHoraExtraCabeceraDescripcion[this]; }
            set { Fields.IdHoraExtraCabeceraDescripcion[this] = value; }
        }

        [DisplayName("Id Hora Extra Cabecera Fecha Borrado"), Expression("jIdHoraExtraCabecera.[fechaBorrado]")]
        public DateTime? IdHoraExtraCabeceraFechaBorrado
        {
            get { return Fields.IdHoraExtraCabeceraFechaBorrado[this]; }
            set { Fields.IdHoraExtraCabeceraFechaBorrado[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Dia; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExtrasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field CodigoCliente;
            public Int64Field IdEmpleado;
            public DateTimeField Fecha;
            public Int64Field IdHoraExtraCabecera;
            public Int32Field Tipo;
            public DecimalField TotalHorasExtrasReales;
            public DecimalField TotalHorasExtrasConvertidas;
            public Int64Field IdAusenciaProgramadaTipo;
            public StringField Dia;
            public StringField Estado;
            public StringField MotivoCancelacion;
            public DateTimeField FechaAceptacionCancelacion;

            public Int64Field IdHoraExtraCabeceraCodigoCliente;
            public StringField IdHoraExtraCabeceraCodigo;
            public StringField IdHoraExtraCabeceraDescripcion;
            public DateTimeField IdHoraExtraCabeceraFechaBorrado;

            public StringField Empleado;
            public Int32Field DptoId;
            public Int32Field SedeId;
            public StringField Sede;
            public StringField Convertidas;
            public StringField EstadoDesc;
        }
    }
}
