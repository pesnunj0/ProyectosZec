
namespace ProyectosZec.Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Roezec"), TableName("roezec_empresas")]
    [DisplayName("Roezec Empresas"), InstanceName("Roezec Empresas")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [InsertPermission("Roezec:Insert")]
    [DeletePermission("Roezec:Delete")]
    public sealed class RoezecEmpresasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Denominacion Social"), Column("denominacion_social"), Size(255), NotNull, QuickSearch]
        public String DenominacionSocial
        {
            get { return Fields.DenominacionSocial[this]; }
            set { Fields.DenominacionSocial[this] = value; }
        }

        [DisplayName("Cif"), Column("cif"), Size(255), NotNull]
        public String Cif
        {
            get { return Fields.Cif[this]; }
            set { Fields.Cif[this] = value; }
        }

        [DisplayName("Direccion"), Column("direccion"), Size(255), NotNull]
        public String Direccion
        {
            get { return Fields.Direccion[this]; }
            set { Fields.Direccion[this] = value; }
        }

        [DisplayName("Cp"), Column("cp"), Size(255), NotNull]
        public String Cp
        {
            get { return Fields.Cp[this]; }
            set { Fields.Cp[this] = value; }
        }

        [DisplayName("Poblacion"), Column("poblacion"), Size(255), NotNull]
        public String Poblacion
        {
            get { return Fields.Poblacion[this]; }
            set { Fields.Poblacion[this] = value; }
        }

        [DisplayName("Provincia"), Column("provincia"), Size(255)]
        public String Provincia
        {
            get { return Fields.Provincia[this]; }
            set { Fields.Provincia[this] = value; }
        }

        [DisplayName("Isla"), Column("isla"), Size(255), NotNull]
        public String Isla
        {
            get { return Fields.Isla[this]; }
            set { Fields.Isla[this] = value; }
        }

        [DisplayName("Notas Marginales"), Column("notas_marginales")]
        public String NotasMarginales
        {
            get { return Fields.NotasMarginales[this]; }
            set { Fields.NotasMarginales[this] = value; }
        }

        [DisplayName("Año Exp."), Column("anyo_expediente")]
        public Int32? AnyoExpediente
        {
            get { return Fields.AnyoExpediente[this]; }
            set { Fields.AnyoExpediente[this] = value; }
        }

        [DisplayName("Número"), Column("num_expediente")]
        public Int32? NumExpediente
        {
            get { return Fields.NumExpediente[this]; }
            set { Fields.NumExpediente[this] = value; }
        }

        [DisplayName("Agencia"), Column("agencia")]
        public Int32? Agencia
        {
            get { return Fields.Agencia[this]; }
            set { Fields.Agencia[this] = value; }
        }

        [DisplayName("Tecnico"), Column("tecnico"), Size(255)]
        public String Tecnico
        {
            get { return Fields.Tecnico[this]; }
            set { Fields.Tecnico[this] = value; }
        }

        [DisplayName("Forma Juridica"), Column("forma_juridica"), Size(255)]
        public String FormaJuridica
        {
            get { return Fields.FormaJuridica[this]; }
            set { Fields.FormaJuridica[this] = value; }
        }

        [DisplayName("Superficie"), Column("superficie")]
        public Double? Superficie
        {
            get { return Fields.Superficie[this]; }
            set { Fields.Superficie[this] = value; }
        }

        [DisplayName("Exenta"), Column("exenta_area_acotada"), Size(255)]
        public String ExentaAreaAcotada
        {
            get { return Fields.ExentaAreaAcotada[this]; }
            set { Fields.ExentaAreaAcotada[this] = value; }
        }

        [DisplayName("Motivos Exencion"), Column("motivos_exencion"), Size(255)]
        public String MotivosExencion
        {
            get { return Fields.MotivosExencion[this]; }
            set { Fields.MotivosExencion[this] = value; }
        }

        [DisplayName("Objetivo Empleo"), Column("objetivo_empleo")]
        public Double? ObjetivoEmpleo
        {
            get { return Fields.ObjetivoEmpleo[this]; }
            set { Fields.ObjetivoEmpleo[this] = value; }
        }

        [DisplayName("Objetivo Inversion"), Column("objetivo_inversion")]
        public Double? ObjetivoInversion
        {
            get { return Fields.ObjetivoInversion[this]; }
            set { Fields.ObjetivoInversion[this] = value; }
        }

        [DisplayName("Observaciones Empleo"), Column("observaciones_empleo"), Size(255)]
        public String ObservacionesEmpleo
        {
            get { return Fields.ObservacionesEmpleo[this]; }
            set { Fields.ObservacionesEmpleo[this] = value; }
        }

        [DisplayName("Observaciones Inversion"), Column("observaciones_inversion"), Size(255)]
        public String ObservacionesInversion
        {
            get { return Fields.ObservacionesInversion[this]; }
            set { Fields.ObservacionesInversion[this] = value; }
        }

        [DisplayName("Pre Empleo"), Column("pre_empleo")]
        public Int32? PreEmpleo
        {
            get { return Fields.PreEmpleo[this]; }
            set { Fields.PreEmpleo[this] = value; }
        }

        [DisplayName("Pre Inversion"), Column("pre_inversion")]
        public Int32? PreInversion
        {
            get { return Fields.PreInversion[this]; }
            set { Fields.PreInversion[this] = value; }
        }

        [DisplayName("Tras Empleo"), Column("tras_empleo")]
        public Int32? TrasEmpleo
        {
            get { return Fields.TrasEmpleo[this]; }
            set { Fields.TrasEmpleo[this] = value; }
        }

        [DisplayName("Tras Inversion"), Column("tras_inversion")]
        public Int32? TrasInversion
        {
            get { return Fields.TrasInversion[this]; }
            set { Fields.TrasInversion[this] = value; }
        }

        [DisplayName("Fecha Alta"), Column("fecha_alta")]
        public DateTime? FechaAlta
        {
            get { return Fields.FechaAlta[this]; }
            set { Fields.FechaAlta[this] = value; }
        }

        [DisplayName("Fecha Modificacion"), Expression("IF(fecha_modificacion='0000-00-00 00:00:00',null,fecha_modificacion)")]
        public DateTime? FechaModificacion
        {
            get { return Fields.FechaModificacion[this]; }
            set { Fields.FechaModificacion[this] = value; }
        }

        [DisplayName("Fecha Baja"), Expression("IF(fecha_baja='0000-00-00 00:00:00',null,fecha_baja)")]
        public DateTime? FechaBaja
        {
            get { return Fields.FechaBaja[this]; }
            set { Fields.FechaBaja[this] = value; }
        }

        [DisplayName("Situacion"), Column("situacion"), Size(255)]
        public String Situacion
        {
            get { return Fields.Situacion[this]; }
            set { Fields.Situacion[this] = value; }
        }

        [DisplayName("Usr Alta"), Column("usr_alta"), Size(255)]
        public String UsrAlta
        {
            get { return Fields.UsrAlta[this]; }
            set { Fields.UsrAlta[this] = value; }
        }

        [DisplayName("Usr Modificacion"), Column("usr_modificacion"), Size(255), NotNull]
        public String UsrModificacion
        {
            get { return Fields.UsrModificacion[this]; }
            set { Fields.UsrModificacion[this] = value; }
        }

        [DisplayName("Usr Baja"), Column("usr_baja"), Size(255), NotNull]
        public String UsrBaja
        {
            get { return Fields.UsrBaja[this]; }
            set { Fields.UsrBaja[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DenominacionSocial; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RoezecEmpresasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField DenominacionSocial;
            public StringField Cif;
            public StringField Direccion;
            public StringField Cp;
            public StringField Poblacion;
            public StringField Provincia;
            public StringField Isla;
            public StringField NotasMarginales;
            public Int32Field AnyoExpediente;
            public Int32Field NumExpediente;
            public Int32Field Agencia;
            public StringField Tecnico;
            public StringField FormaJuridica;
            public DoubleField Superficie;
            public StringField ExentaAreaAcotada;
            public StringField MotivosExencion;
            public DoubleField ObjetivoEmpleo;
            public DoubleField ObjetivoInversion;
            public StringField ObservacionesEmpleo;
            public StringField ObservacionesInversion;
            public Int32Field PreEmpleo;
            public Int32Field PreInversion;
            public Int32Field TrasEmpleo;
            public Int32Field TrasInversion;
            public DateTimeField FechaAlta;
            public DateTimeField FechaModificacion;
            public DateTimeField FechaBaja;
            public StringField Situacion;
            public StringField UsrAlta;
            public StringField UsrModificacion;
            public StringField UsrBaja;
        }
    }
}
