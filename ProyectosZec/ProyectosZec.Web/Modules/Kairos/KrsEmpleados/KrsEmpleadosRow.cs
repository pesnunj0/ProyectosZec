
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[KRS_Empleados]")]
    [DisplayName("Krs Empleados"), InstanceName("Krs Empleados")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Modify")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]
    [LookupScript("Kairos.KrsEmpleados")]
    public sealed class KrsEmpleadosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), PrimaryKey]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Codigo Cliente"), Column("codigoCliente"), PrimaryKey]
        public Int64? CodigoCliente
        {
            get { return Fields.CodigoCliente[this]; }
            set { Fields.CodigoCliente[this] = value; }
        }

        [DisplayName("Nombre"), Column("nombre"), Size(50), NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Codigo Validacion"), Column("codigoValidacion"), Size(50), NotNull]
        public String CodigoValidacion
        {
            get { return Fields.CodigoValidacion[this]; }
            set { Fields.CodigoValidacion[this] = value; }
        }

        [DisplayName("Fecha Baja"), Column("fechaBaja")]
        public DateTime? FechaBaja
        {
            get { return Fields.FechaBaja[this]; }
            set { Fields.FechaBaja[this] = value; }
        }

        [DisplayName("Pin"), Column("pin"), NotNull]
        public Int32? Pin
        {
            get { return Fields.Pin[this]; }
            set { Fields.Pin[this] = value; }
        }

        [DisplayName("Tecnico"), Column("tecnico")]
        public Boolean? Tecnico
        {
            get { return Fields.Tecnico[this]; }
            set { Fields.Tecnico[this] = value; }
        }

        [DisplayName("Uso Horario"), Column("usoHorario"), Size(100), NotNull]
        public String UsoHorario
        {
            get { return Fields.UsoHorario[this]; }
            set { Fields.UsoHorario[this] = value; }
        }

        [DisplayName("Sacar Foto Fichaje"), Column("sacarFotoFichaje"), NotNull]
        public Boolean? SacarFotoFichaje
        {
            get { return Fields.SacarFotoFichaje[this]; }
            set { Fields.SacarFotoFichaje[this] = value; }
        }

        [DisplayName("Fecha Actualizacion"), Column("fechaActualizacion"), NotNull]
        public DateTime? FechaActualizacion
        {
            get { return Fields.FechaActualizacion[this]; }
            set { Fields.FechaActualizacion[this] = value; }
        }

        [DisplayName("Fecha Borrado"), Column("fechaBorrado")]
        public DateTime? FechaBorrado
        {
            get { return Fields.FechaBorrado[this]; }
            set { Fields.FechaBorrado[this] = value; }
        }

        [DisplayName("Numero Tarjeta Fichaje"), Column("numeroTarjetaFichaje"), Size(50)]
        public String NumeroTarjetaFichaje
        {
            get { return Fields.NumeroTarjetaFichaje[this]; }
            set { Fields.NumeroTarjetaFichaje[this] = value; }
        }

        [DisplayName("Id Departamento"), Column("idDepartamento")]
        public Int64? IdDepartamento
        {
            get { return Fields.IdDepartamento[this]; }
            set { Fields.IdDepartamento[this] = value; }
        }

        [DisplayName("Id Empresa"), Column("idEmpresa")]
        public Int64? IdEmpresa
        {
            get { return Fields.IdEmpresa[this]; }
            set { Fields.IdEmpresa[this] = value; }
        }

        [DisplayName("Email"), Column("email"), Size(50)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Permite Recordatorio"), Column("permiteRecordatorio")]
        public Boolean? PermiteRecordatorio
        {
            get { return Fields.PermiteRecordatorio[this]; }
            set { Fields.PermiteRecordatorio[this] = value; }
        }

        [DisplayName("Permite Fichaje Automatico"), Column("permiteFichajeAutomatico")]
        public Boolean? PermiteFichajeAutomatico
        {
            get { return Fields.PermiteFichajeAutomatico[this]; }
            set { Fields.PermiteFichajeAutomatico[this] = value; }
        }

        [DisplayName("Id Empresa Fichaje Automatico"), Column("idEmpresa_FichajeAutomatico")]
        public Int64? IdEmpresaFichajeAutomatico
        {
            get { return Fields.IdEmpresaFichajeAutomatico[this]; }
            set { Fields.IdEmpresaFichajeAutomatico[this] = value; }
        }

        [DisplayName("Programa Externo Id Empleado"), Column("programaExterno_idEmpleado"), Size(100)]
        public String ProgramaExternoIdEmpleado
        {
            get { return Fields.ProgramaExternoIdEmpleado[this]; }
            set { Fields.ProgramaExternoIdEmpleado[this] = value; }
        }

        [DisplayName("Programa Externo Descripcion"), Column("programaExterno_descripcion"), Size(50)]
        public String ProgramaExternoDescripcion
        {
            get { return Fields.ProgramaExternoDescripcion[this]; }
            set { Fields.ProgramaExternoDescripcion[this] = value; }
        }

        [DisplayName("Id Hora Extra Cabecera"), Column("idHoraExtraCabecera"), ForeignKey("[dbo].[KRS_HorasExtrasCabecera]", "id"), LeftJoin("jIdHoraExtraCabecera"), TextualField("IdHoraExtraCabeceraCodigo")]
        public Int64? IdHoraExtraCabecera
        {
            get { return Fields.IdHoraExtraCabecera[this]; }
            set { Fields.IdHoraExtraCabecera[this] = value; }
        }

        [DisplayName("Clave Acceso Web"), Column("claveAccesoWeb"), Size(100)]
        public String ClaveAccesoWeb
        {
            get { return Fields.ClaveAccesoWeb[this]; }
            set { Fields.ClaveAccesoWeb[this] = value; }
        }

        [DisplayName("Permite Fichaje Web"), Column("permiteFichajeWeb")]
        public Boolean? PermiteFichajeWeb
        {
            get { return Fields.PermiteFichajeWeb[this]; }
            set { Fields.PermiteFichajeWeb[this] = value; }
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
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public KrsEmpleadosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field CodigoCliente;
            public StringField Nombre;
            public StringField CodigoValidacion;
            public DateTimeField FechaBaja;
            public Int32Field Pin;
            public BooleanField Tecnico;
            public StringField UsoHorario;
            public BooleanField SacarFotoFichaje;
            public DateTimeField FechaActualizacion;
            public DateTimeField FechaBorrado;
            public StringField NumeroTarjetaFichaje;
            public Int64Field IdDepartamento;
            public Int64Field IdEmpresa;
            public StringField Email;
            public BooleanField PermiteRecordatorio;
            public BooleanField PermiteFichajeAutomatico;
            public Int64Field IdEmpresaFichajeAutomatico;
            public StringField ProgramaExternoIdEmpleado;
            public StringField ProgramaExternoDescripcion;
            public Int64Field IdHoraExtraCabecera;
            public StringField ClaveAccesoWeb;
            public BooleanField PermiteFichajeWeb;

            public Int64Field IdHoraExtraCabeceraCodigoCliente;
            public StringField IdHoraExtraCabeceraCodigo;
            public StringField IdHoraExtraCabeceraDescripcion;
            public DateTimeField IdHoraExtraCabeceraFechaBorrado;
        }
    }
}
