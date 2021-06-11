
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[KRS_AusenciasProgramadasTipos]")]
    [DisplayName("Tipos de Solicitud"), InstanceName("Krs Ausencias Programadas Tipos")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Modify")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]
    [LookupScript("Kairos.TiposSolicitud")]
    public sealed class KrsAusenciasProgramadasTiposRow : Row, IIdRow, INameRow
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

        [DisplayName("Codigo"), Column("codigo"), Size(10), NotNull, QuickSearch]
        public String Codigo
        {
            get { return Fields.Codigo[this]; }
            set { Fields.Codigo[this] = value; }
        }

        [DisplayName("Descripcion"), Column("descripcion"), Size(50), NotNull]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        [DisplayName("Color Fondo"), Column("colorFondo"), Size(20)]
        public String ColorFondo
        {
            get { return Fields.ColorFondo[this]; }
            set { Fields.ColorFondo[this] = value; }
        }

        [DisplayName("Color Letra"), Column("colorLetra"), Size(20)]
        public String ColorLetra
        {
            get { return Fields.ColorLetra[this]; }
            set { Fields.ColorLetra[this] = value; }
        }

        [DisplayName("Fecha Borrado"), Column("fechaBorrado")]
        public DateTime? FechaBorrado
        {
            get { return Fields.FechaBorrado[this]; }
            set { Fields.FechaBorrado[this] = value; }
        }

        [DisplayName("Permitir Solicitud"), Column("permitirSolicitud")]
        public Boolean? PermitirSolicitud
        {
            get { return Fields.PermitirSolicitud[this]; }
            set { Fields.PermitirSolicitud[this] = value; }
        }

        [DisplayName("Fecha Actualizacion"), Column("fechaActualizacion"), NotNull]
        public DateTime? FechaActualizacion
        {
            get { return Fields.FechaActualizacion[this]; }
            set { Fields.FechaActualizacion[this] = value; }
        }

        [DisplayName("Contabilizar Tiempo"), Column("contabilizarTiempo")]
        public Boolean? ContabilizarTiempo
        {
            get { return Fields.ContabilizarTiempo[this]; }
            set { Fields.ContabilizarTiempo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descripcion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public KrsAusenciasProgramadasTiposRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field CodigoCliente;
            public StringField Codigo;
            public StringField Descripcion;
            public StringField ColorFondo;
            public StringField ColorLetra;
            public DateTimeField FechaBorrado;
            public BooleanField PermitirSolicitud;
            public DateTimeField FechaActualizacion;
            public BooleanField ContabilizarTiempo;
        }
    }
}
