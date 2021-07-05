
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[KRS_AusenciasProgramadas]")]
    [DisplayName("Solicitudes"), InstanceName("Ausencias Programadas")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Admin")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]
    public sealed class AusenciasProgramadasRow : Row, IIdRow
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

        [DisplayName("Empleado"), Column("idEmpleado"), NotNull,ForeignKey("[dbo].Krs_Empleados", "Id"), LeftJoin("jEmpleados"),LookupInclude]
        [LookupEditor("Kairos.KrsEmpleados")]
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

        [DisplayName("Tipo de Solicitud"), Column("idAusenciaProgramadaTipo"), NotNull, ForeignKey("[dbo].[KRS_AusenciasProgramadasTipos]", "id"), LeftJoin("jIdAusenciaProgramadaTipo"),LookupInclude, TextualField("descripcion")]
        [LookupEditor(typeof(Entities.KrsAusenciasProgramadasTiposRow))]
        public Int64? IdAusenciaProgramadaTipo
        {
            get { return Fields.IdAusenciaProgramadaTipo[this]; }
            set { Fields.IdAusenciaProgramadaTipo[this] = value; }
        }

        [DisplayName("Fecha Desde"), Column("fechaDesde"), NotNull]
        public DateTime? FechaDesde
        {
            get { return Fields.FechaDesde[this]; }
            set { Fields.FechaDesde[this] = value; }
        }

        [DisplayName("Fecha Hasta"), Column("fechaHasta")]
        public DateTime? FechaHasta
        {
            get { return Fields.FechaHasta[this]; }
            set { Fields.FechaHasta[this] = value; }
        }

        [DisplayName("Fecha Borrado"), Column("fechaBorrado")]
        public DateTime? FechaBorrado
        {
            get { return Fields.FechaBorrado[this]; }
            set { Fields.FechaBorrado[this] = value; }
        }

        [DisplayName("Total Horas"), Column("totalHoras"), Size(14), Scale(2)]
        public Decimal? TotalHoras
        {
            get { return Fields.TotalHoras[this]; }
            set { Fields.TotalHoras[this] = value; }
        }

        [DisplayName("Total Dias"), Column("totalDias")]
        public Int32? TotalDias
        {
            get { return Fields.TotalDias[this]; }
            set { Fields.TotalDias[this] = value; }
        }

        [DisplayName("Id Ausencia Programada Tipo Codigo Cliente"), Expression("jIdAusenciaProgramadaTipo.[codigoCliente]")]
        public Int64? IdAusenciaProgramadaTipoCodigoCliente
        {
            get { return Fields.IdAusenciaProgramadaTipoCodigoCliente[this]; }
            set { Fields.IdAusenciaProgramadaTipoCodigoCliente[this] = value; }
        }

        [DisplayName("Id Ausencia Programada Tipo Codigo"), Expression("jIdAusenciaProgramadaTipo.[codigo]")]
        public String IdAusenciaProgramadaTipoCodigo
        {
            get { return Fields.IdAusenciaProgramadaTipoCodigo[this]; }
            set { Fields.IdAusenciaProgramadaTipoCodigo[this] = value; }
        }

        [DisplayName("Tipo Solicitud"), Expression("jIdAusenciaProgramadaTipo.[descripcion]")]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        [DisplayName("Id Ausencia Programada Tipo Color Fondo"), Expression("jIdAusenciaProgramadaTipo.[colorFondo]")]
        public String IdAusenciaProgramadaTipoColorFondo
        {
            get { return Fields.IdAusenciaProgramadaTipoColorFondo[this]; }
            set { Fields.IdAusenciaProgramadaTipoColorFondo[this] = value; }
        }

        [DisplayName("Id Ausencia Programada Tipo Color Letra"), Expression("jIdAusenciaProgramadaTipo.[colorLetra]")]
        public String IdAusenciaProgramadaTipoColorLetra
        {
            get { return Fields.IdAusenciaProgramadaTipoColorLetra[this]; }
            set { Fields.IdAusenciaProgramadaTipoColorLetra[this] = value; }
        }

        [DisplayName("Id Ausencia Programada Tipo Fecha Borrado"), Expression("jIdAusenciaProgramadaTipo.[fechaBorrado]")]
        public DateTime? IdAusenciaProgramadaTipoFechaBorrado
        {
            get { return Fields.IdAusenciaProgramadaTipoFechaBorrado[this]; }
            set { Fields.IdAusenciaProgramadaTipoFechaBorrado[this] = value; }
        }

        [DisplayName("Id Ausencia Programada Tipo Permitir Solicitud"), Expression("jIdAusenciaProgramadaTipo.[permitirSolicitud]")]
        public Boolean? IdAusenciaProgramadaTipoPermitirSolicitud
        {
            get { return Fields.IdAusenciaProgramadaTipoPermitirSolicitud[this]; }
            set { Fields.IdAusenciaProgramadaTipoPermitirSolicitud[this] = value; }
        }

        [DisplayName("Id Ausencia Programada Tipo Fecha Actualizacion"), Expression("jIdAusenciaProgramadaTipo.[fechaActualizacion]")]
        public DateTime? IdAusenciaProgramadaTipoFechaActualizacion
        {
            get { return Fields.IdAusenciaProgramadaTipoFechaActualizacion[this]; }
            set { Fields.IdAusenciaProgramadaTipoFechaActualizacion[this] = value; }
        }

        [DisplayName("Id Ausencia Programada Tipo Contabilizar Tiempo"), Expression("jIdAusenciaProgramadaTipo.[contabilizarTiempo]")]
        public Boolean? IdAusenciaProgramadaTipoContabilizarTiempo
        {
            get { return Fields.IdAusenciaProgramadaTipoContabilizarTiempo[this]; }
            set { Fields.IdAusenciaProgramadaTipoContabilizarTiempo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AusenciasProgramadasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field CodigoCliente;
            public Int64Field IdEmpleado;
            public Int64Field IdAusenciaProgramadaTipo;
            public DateTimeField FechaDesde;
            public DateTimeField FechaHasta;
            public DateTimeField FechaBorrado;
            public DecimalField TotalHoras;
            public Int32Field TotalDias;
            public StringField Empleado;

            public Int64Field IdAusenciaProgramadaTipoCodigoCliente;
            public StringField IdAusenciaProgramadaTipoCodigo;
            public StringField Descripcion;
            public StringField IdAusenciaProgramadaTipoColorFondo;
            public StringField IdAusenciaProgramadaTipoColorLetra;
            public DateTimeField IdAusenciaProgramadaTipoFechaBorrado;
            public BooleanField IdAusenciaProgramadaTipoPermitirSolicitud;
            public DateTimeField IdAusenciaProgramadaTipoFechaActualizacion;
            public BooleanField IdAusenciaProgramadaTipoContabilizarTiempo;
        }
    }
}
