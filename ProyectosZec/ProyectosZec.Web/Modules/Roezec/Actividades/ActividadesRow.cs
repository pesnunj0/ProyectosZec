
namespace ProyectosZec.Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Roezec"), TableName("roezec_actividades")]
    [DisplayName("Actividades"), InstanceName("Actividades")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Read")]
    public sealed class ActividadesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Nace"), Column("id_nace"), NotNull, ForeignKey("roezec_nace", "id"), LeftJoin("jNace"), TextualField("Nace")]
        [LookupEditor("Roezec.Naces")]
        public Int32? IdNace
        {
            get { return Fields.IdNace[this]; }
            set { Fields.IdNace[this] = value; }
        }

        [DisplayName("Id Empresa"), Column("id_empresa"), NotNull, ForeignKey("roezec_empresas", "id"), LeftJoin("jEmpresas"), TextualField("Empresa")]
        [LookupEditor(typeof(RoezecEmpresasRow))]
        public Int32? IdEmpresa
        {
            get { return Fields.IdEmpresa[this]; }
            set { Fields.IdEmpresa[this] = value; }
        }

        [DisplayName("C.Nace"), Expression("jNace.codigo"), Size(255)]
        public String Codigo
        {
            get { return Fields.Codigo[this]; }
            set { Fields.Codigo[this] = value; }
        }

        [DisplayName("Nace"), Expression("jNace.Actividad"),QuickSearch]

        public String Actividad
        {
            get { return Fields.Actividad[this]; }
            set { Fields.Actividad[this] = value; }
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

        [DisplayName("Direccion"), Expression("jEmpresas.direccion"), Size(255), NotNull]
        public String Direccion
        {
            get { return Fields.Direccion[this]; }
            set { Fields.Direccion[this] = value; }
        }

        [DisplayName("Cp"), Expression("jEmpresas.cp"), Size(255), NotNull]
        public String Cp
        {
            get { return Fields.Cp[this]; }
            set { Fields.Cp[this] = value; }
        }

        [DisplayName("Poblacion"), Expression("jEmpresas.poblacion"), Size(255), NotNull]
        public String Poblacion
        {
            get { return Fields.Poblacion[this]; }
            set { Fields.Poblacion[this] = value; }
        }

        [DisplayName("Provincia"), Expression("jEmpresas.provincia"), Size(255)]
        public String Provincia
        {
            get { return Fields.Provincia[this]; }
            set { Fields.Provincia[this] = value; }
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

        [DisplayName("Fecha Alta"), Expression("jEmpresas.fecha_alta")]
        public DateTime? FechaAlta
        {
            get { return Fields.FechaAlta[this]; }
            set { Fields.FechaAlta[this] = value; }
        }

        [DisplayName("Fecha Modificacion"), Expression("IF(jEmpresas.fecha_modificacion='0000-00-00 00:00:00',null,jEmpresas.fecha_modificacion)")]
        public DateTime? FechaModificacion
        {
            get { return Fields.FechaModificacion[this]; }
            set { Fields.FechaModificacion[this] = value; }
        }

        [DisplayName("Fecha Baja"), Expression("IF(jEmpresas.fecha_baja='0000-00-00 00:00:00',null,jEmpresas.fecha_baja)")]
        public DateTime? FechaBaja
        {
            get { return Fields.FechaBaja[this]; }
            set { Fields.FechaBaja[this] = value; }
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



        [DisplayName("Usr Alta"), Expression("jEmpresas.usr_alta"), Size(255)]
        public String UsrAlta
        {
            get { return Fields.UsrAlta[this]; }
            set { Fields.UsrAlta[this] = value; }
        }

        [DisplayName("Usr Modificacion"), Expression("jEmpresas.usr_modificacion"), Size(255), NotNull]
        public String UsrModificacion
        {
            get { return Fields.UsrModificacion[this]; }
            set { Fields.UsrModificacion[this] = value; }
        }

        [DisplayName("Usr Baja"), Expression("jEmpresas.usr_baja"), Size(255), NotNull]
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
            get { return Fields.Actividad; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ActividadesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdNace;
            public Int32Field IdEmpresa;
            public StringField Actividad;
            public StringField Empresa;

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
            public StringField SituacionId;
            public StringField Estado;
            public StringField UsrAlta;
            public StringField UsrModificacion;
            public StringField UsrBaja;
            public StringField Codigo;
        }
    }
}
