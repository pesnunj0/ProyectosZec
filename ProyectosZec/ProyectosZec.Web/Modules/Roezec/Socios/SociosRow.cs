
namespace ProyectosZec.Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Roezec"), TableName("roezec_socios")]
    [DisplayName("Socios"), InstanceName("Socios")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [InsertPermission("Roezec:Insert")]
    [DeletePermission("Roezec:Delete")]
    public sealed class SociosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Tipo Doc"), Column("tipo_doc"), Size(255), NotNull]
        public String TipoDoc
        {
            get { return Fields.TipoDoc[this]; }
            set { Fields.TipoDoc[this] = value; }
        }

        [DisplayName("Doc"), Column("doc"), Size(255), NotNull]
        public String Doc
        {
            get { return Fields.Doc[this]; }
            set { Fields.Doc[this] = value; }
        }

        [DisplayName("Tipo Persona"), Column("tipo_persona"), Size(255), NotNull]
        public String TipoPersona
        {
            get { return Fields.TipoPersona[this]; }
            set { Fields.TipoPersona[this] = value; }
        }

        [DisplayName("Nombre"), Column("nombre"), Size(255), NotNull,QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
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

        [DisplayName("Provincia"), Column("provincia"), Size(255), NotNull]
        public String Provincia
        {
            get { return Fields.Provincia[this]; }
            set { Fields.Provincia[this] = value; }
        }

        [DisplayName("Pais"), Column("pais"), Size(255), NotNull]
        public String Pais
        {
            get { return Fields.Pais[this]; }
            set { Fields.Pais[this] = value; }
        }

        [DisplayName("Email"), Column("email"), Size(255), NotNull]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Telefono"), Column("telefono"), Size(255), NotNull]
        public String Telefono
        {
            get { return Fields.Telefono[this]; }
            set { Fields.Telefono[this] = value; }
        }

        [DisplayName("Descripcion"), Column("descripcion"), Size(255), NotNull]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }


        [DisplayName("Participacion"), Column("participacion"), NotNull]
        public Int32? Participacion
        {
            get { return Fields.Participacion[this]; }
            set { Fields.Participacion[this] = value; }
        }

        [DisplayName("Fecha Alta"), Column("fecha_alta"), NotNull]
        public DateTime? FechaAlta
        {
            get { return Fields.FechaAlta[this]; }
            set { Fields.FechaAlta[this] = value; }
        }

        [DisplayName("Fecha Modificacion"), Expression("IF(T0.[fecha_modificacion]='0000-00-00 00:00:00',null,T0.[fecha_modificacion])")]
        public DateTime? FechaModificacion
        {
            get { return Fields.FechaModificacion[this]; }
            set { Fields.FechaModificacion[this] = value; }
        }

        [DisplayName("Fecha Baja"), Expression("IF(T0.[fecha_baja]='0000-00-00 00:00:00',null,T0.[fecha_baja])")]
        public DateTime? FechaBaja
        {
            get { return Fields.FechaBaja[this]; }
            set { Fields.FechaBaja[this] = value; }
        }

        [DisplayName("Usr Alta"), Column("usr_alta"), Size(255), NotNull]
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

        [DisplayName("Motivo Baja"), Column("motivo_baja"), Size(255), NotNull]
        public String MotivoBaja
        {
            get { return Fields.MotivoBaja[this]; }
            set { Fields.MotivoBaja[this] = value; }
        }

        [DisplayName("Id Empresa"), Column("id_empresa"), NotNull, ForeignKey("roezec_empresas", "id"), LeftJoin("jEmpresas"), TextualField("Empresa")]
        [LookupEditor(typeof(RoezecEmpresasRow))]
        public Int32? IdEmpresa
        {
            get { return Fields.IdEmpresa[this]; }
            set { Fields.IdEmpresa[this] = value; }
        }


        [DisplayName("Empresa"), Expression("jEmpresas.denominacion_social"), QuickSearch]
        public String Empresa
        {
            get { return Fields.Empresa[this]; }
            set { Fields.Empresa[this] = value; }
        }

        [DisplayName("Cif"), Expression("jEmpresas.cif"), Size(255), NotNull]
        public String Cif
        {
            get { return Fields.Cif[this]; }
            set { Fields.Cif[this] = value; }
        }


        [DisplayName("Isla"), Expression("jEmpresas.isla"), Size(255), NotNull]
        public String Isla
        {
            get { return Fields.Isla[this]; }
            set { Fields.Isla[this] = value; }
        }

        [DisplayName("Notas Marginales"), Expression("jEmpresas.notas_marginales")]
        public String NotasMarginales
        {
            get { return Fields.NotasMarginales[this]; }
            set { Fields.NotasMarginales[this] = value; }
        }

        [DisplayName("Año Exp."), Expression("jEmpresas.anyo_expediente")]
        public Int32? AnyoExpediente
        {
            get { return Fields.AnyoExpediente[this]; }
            set { Fields.AnyoExpediente[this] = value; }
        }

        [DisplayName("Número"), Expression("jEmpresas.num_expediente")]
        public Int32? NumExpediente
        {
            get { return Fields.NumExpediente[this]; }
            set { Fields.NumExpediente[this] = value; }
        }

        [DisplayName("Agencia"), Expression("jEmpresas.agencia")]
        public Int32? Agencia
        {
            get { return Fields.Agencia[this]; }
            set { Fields.Agencia[this] = value; }
        }

        [DisplayName("Tecnico"), Expression("jEmpresas.tecnico"), Size(255)]
        public String Tecnico
        {
            get { return Fields.Tecnico[this]; }
            set { Fields.Tecnico[this] = value; }
        }

        [DisplayName("Forma Juridica"), Expression("jEmpresas.forma_juridica"), Size(255)]
        public String FormaJuridica
        {
            get { return Fields.FormaJuridica[this]; }
            set { Fields.FormaJuridica[this] = value; }
        }

        [DisplayName("Superficie"), Expression("jEmpresas.superficie")]
        public Double? Superficie
        {
            get { return Fields.Superficie[this]; }
            set { Fields.Superficie[this] = value; }
        }

        [DisplayName("Exenta"), Expression("jEmpresas.exenta_area_acotada"), Size(255)]
        public String ExentaAreaAcotada
        {
            get { return Fields.ExentaAreaAcotada[this]; }
            set { Fields.ExentaAreaAcotada[this] = value; }
        }

        [DisplayName("Motivos Exencion"), Expression("jEmpresas.motivos_exencion"), Size(255)]
        public String MotivosExencion
        {
            get { return Fields.MotivosExencion[this]; }
            set { Fields.MotivosExencion[this] = value; }
        }

        [DisplayName("Objetivo Empleo"), Expression("jEmpresas.objetivo_empleo")]
        public Double? ObjetivoEmpleo
        {
            get { return Fields.ObjetivoEmpleo[this]; }
            set { Fields.ObjetivoEmpleo[this] = value; }
        }

        [DisplayName("Objetivo Inversion"), Expression("jEmpresas.objetivo_inversion")]
        public Double? ObjetivoInversion
        {
            get { return Fields.ObjetivoInversion[this]; }
            set { Fields.ObjetivoInversion[this] = value; }
        }

        [DisplayName("Observaciones Empleo"), Expression("jEmpresas.observaciones_empleo"), Size(255)]
        public String ObservacionesEmpleo
        {
            get { return Fields.ObservacionesEmpleo[this]; }
            set { Fields.ObservacionesEmpleo[this] = value; }
        }

        [DisplayName("Observaciones Inversion"), Expression("jEmpresas.observaciones_inversion"), Size(255)]
        public String ObservacionesInversion
        {
            get { return Fields.ObservacionesInversion[this]; }
            set { Fields.ObservacionesInversion[this] = value; }
        }

        [DisplayName("Pre Empleo"), Expression("jEmpresas.pre_empleo")]
        public Int32? PreEmpleo
        {
            get { return Fields.PreEmpleo[this]; }
            set { Fields.PreEmpleo[this] = value; }
        }

        [DisplayName("Pre Inversion"), Expression("jEmpresas.pre_inversion")]
        public Int32? PreInversion
        {
            get { return Fields.PreInversion[this]; }
            set { Fields.PreInversion[this] = value; }
        }

        [DisplayName("Tras Empleo"), Expression("jEmpresas.tras_empleo")]
        public Int32? TrasEmpleo
        {
            get { return Fields.TrasEmpleo[this]; }
            set { Fields.TrasEmpleo[this] = value; }
        }

        [DisplayName("Tras Inversion"), Expression("jEmpresas.tras_inversion")]
        public Int32? TrasInversion
        {
            get { return Fields.TrasInversion[this]; }
            set { Fields.TrasInversion[this] = value; }
        }



        [DisplayName("EstadoId"), Expression("jEmpresas.situacion"), ForeignKey("roezec_estados", "codigo"), LeftJoin("jEstados"), Size(255)]
        [LookupEditor("Roezec.RoezecEstados")]
        public String SituacionId
        {
            get { return Fields.SituacionId[this]; }
            set { Fields.SituacionId[this] = value; }
        }

        [DisplayName("Estado"), Expression("jEstados.descripcion")]
        public String Estado
        {
            get { return Fields.Estado[this]; }
            set { Fields.Estado[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TipoDoc; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SociosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField TipoDoc;
            public StringField Doc;
            public StringField TipoPersona;
            public StringField Nombre;
            public StringField Direccion;
            public StringField Cp;
            public StringField Poblacion;
            public StringField Provincia;
            public StringField Pais;
            public StringField Email;
            public StringField Telefono;
            public StringField Descripcion;
            public Int32Field IdEmpresa;
            public Int32Field Participacion;
            public DateTimeField FechaAlta;
            public DateTimeField FechaModificacion;
            public DateTimeField FechaBaja;
            public StringField UsrAlta;
            public StringField UsrModificacion;
            public StringField UsrBaja;
            public StringField MotivoBaja;

            public StringField Empresa;
            public StringField Cif;
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
            public StringField SituacionId;
            public StringField Estado;

        }
    }
}
