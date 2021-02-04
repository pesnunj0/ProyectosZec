
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[Fichajes]")]
    [DisplayName("Diario"), InstanceName("Diario")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Modify")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]
    public sealed class DiarioRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        [DisplayName("Id Empleado"), Column("idEmpleado"), NotNull]
        public Int64? IdEmpleado
        {
            get { return Fields.IdEmpleado[this]; }
            set { Fields.IdEmpleado[this] = value; }
        }

        [DisplayName("Id Departamento"), Column("idDepartamento"), ForeignKey("KRS_Departamentos", "id"), LeftJoin("jDepartamentos")]
        public Int64? IdDepartamento
        {
            get { return Fields.IdDepartamento[this]; }
            set { Fields.IdDepartamento[this] = value; }
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

        [DisplayName("Empleado"), Size(50), QuickSearch]
        public String Empleado
        {
            get { return Fields.Empleado[this]; }
            set { Fields.Empleado[this] = value; }
        }

        [DisplayName("Fecha")]
        public DateTime? Fecha
        {
            get { return Fields.Fecha[this]; }
            set { Fields.Fecha[this] = value; }
        }

        [DisplayName("Entrada")]
        public DateTime? Entrada
        {
            get { return Fields.Entrada[this]; }
            set { Fields.Entrada[this] = value; }
        }

        [DisplayName("Hora Entrada"), Size(8), Expression("RIGHT(CONVERT(DATETIME, T0.[Entrada], 108),8)")]
        public String HoraEntrada
        {
            get { return Fields.HoraEntrada[this]; }
            set { Fields.HoraEntrada[this] = value; }
        }

        [DisplayName("Salida")]
        public DateTime? Salida
        {
            get { return Fields.Salida[this]; }
            set { Fields.Salida[this] = value; }
        }

        [DisplayName("Hora Salida"), Size(8), Expression("RIGHT(CONVERT(DATETIME, T0.[Salida], 108),8)")]
        public String HoraSalida
        {
            get { return Fields.HoraSalida[this]; }
            set { Fields.HoraSalida[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Empleado; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DiarioRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field IdEmpleado;
            public Int64Field IdDepartamento;
            public StringField Empleado;
            public DateTimeField Fecha;
            public DateTimeField Entrada;
            public StringField HoraEntrada;
            public DateTimeField Salida;
            public StringField HoraSalida;
            public Int32Field SedeId;
            public StringField Sede;
        }
    }
}
