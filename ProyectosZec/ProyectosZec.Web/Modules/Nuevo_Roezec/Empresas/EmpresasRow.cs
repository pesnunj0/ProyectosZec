
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("empresas")]
    [DisplayName("Empresas"), InstanceName("Empresas")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    public sealed class EmpresasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Empresa Id"), Identity]
        public Int32? EmpresaId
        {
            get { return Fields.EmpresaId[this]; }
            set { Fields.EmpresaId[this] = value; }
        }

        [DisplayName("Razon"), Size(45), NotNull, QuickSearch]
        public String Razon
        {
            get { return Fields.Razon[this]; }
            set { Fields.Razon[this] = value; }
        }

        [DisplayName("Forma Juridica"), ForeignKey("formas_juridicas", "Forma_JuridicaId"), LeftJoin("jFormaJuridica"), TextualField("FormaJuridicaJuridica"),LookupInclude,QuickSearch]
        [LookupEditor(typeof(Entities.FormasJuridicasRow), InplaceAdd = true)]
        public Int32? FormaJuridicaId
        {
            get { return Fields.FormaJuridicaId[this]; }
            set { Fields.FormaJuridicaId[this] = value; }
        }

        [DisplayName("N Expediente"), Column("N_Expediente"), Size(25)]
        public String NExpediente
        {
            get { return Fields.NExpediente[this]; }
            set { Fields.NExpediente[this] = value; }
        }

        [DisplayName("Tecnico"), ForeignKey("tecnicos", "TecnicoId"), LeftJoin("jTecnico"), TextualField("TecnicoNombreTecnico"),LookupInclude,QuickSearch]
        [LookupEditor(typeof(Entities.TecnicosRow), InplaceAdd = true)]
        public Int32? TecnicoId
        {
            get { return Fields.TecnicoId[this]; }
            set { Fields.TecnicoId[this] = value; }
        }

        [DisplayName("Cif"), Size(20), NotNull]
        public String Cif
        {
            get { return Fields.Cif[this]; }
            set { Fields.Cif[this] = value; }
        }

        [DisplayName("Direccion"), Size(60)]
        public String Direccion
        {
            get { return Fields.Direccion[this]; }
            set { Fields.Direccion[this] = value; }
        }

        [DisplayName("Poblacion"), Size(100)]
        public String Poblacion
        {
            get { return Fields.Poblacion[this]; }
            set { Fields.Poblacion[this] = value; }
        }

        [DisplayName("IslaId"), ForeignKey("islas", "IslaId"), LeftJoin("jIsla"), TextualField("IslaNombreIsla"),QuickSearch,LookupInclude]
        [LookupEditor(typeof(Entities.IslasRow))]
        public Int32? IslaId
        {
            get { return Fields.IslaId[this]; }
            set { Fields.IslaId[this] = value; }
        }

        [DisplayName("Telefono Fijo"), Column("Telefono_fijo"), Size(20), NotNull]
        public String TelefonoFijo
        {
            get { return Fields.TelefonoFijo[this]; }
            set { Fields.TelefonoFijo[this] = value; }
        }

        [DisplayName("Movil"), Size(20), NotNull]
        public String Movil
        {
            get { return Fields.Movil[this]; }
            set { Fields.Movil[this] = value; }
        }

        [DisplayName("Email"), Size(75), NotNull]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Proyecto"), ForeignKey("proyectos", "ProyectoId"), LeftJoin("jProyecto"), TextualField("Proyecto")]
        public Int32? ProyectoId
        {
            get { return Fields.ProyectoId[this]; }
            set { Fields.ProyectoId[this] = value; }
        }

        [DisplayName("Expediente"), Size(25)]
        public String Expediente
        {
            get { return Fields.Expediente[this]; }
            set { Fields.Expediente[this] = value; }
        }

        [DisplayName("Motivo Exencion"), Column("Motivo_Exencion"), Size(100)]
        public String MotivoExencion
        {
            get { return Fields.MotivoExencion[this]; }
            set { Fields.MotivoExencion[this] = value; }
        }

        [DisplayName("Tipologia Capital"), Column("Tipologia_CapitalId"), ForeignKey("tipologias_capital", "Tipologia_CapitalId"), LeftJoin("jTipologiaCapital"), TextualField("TipologiaCapitalCapital"),LookupInclude,QuickSearch]
        [LookupEditor(typeof(Entities.TipologiasCapitalRow), InplaceAdd = true)]
        public Int32? TipologiaCapitalId
        {
            get { return Fields.TipologiaCapitalId[this]; }
            set { Fields.TipologiaCapitalId[this] = value; }
        }

        [DisplayName("Tipo Garantia Tasa"), Column("Tipo_Garantia_TasaId"), ForeignKey("tipos_garantia_tasas", "Tipo_Garantia_TasaId"), LeftJoin("jTipoGarantiaTasa"), TextualField("TipoGarantiaTasaGarantiaTasa"),LookupInclude,QuickSearch]
        [LookupEditor(typeof(Entities.TiposGarantiaTasasRow), InplaceAdd = true)]
        public Int32? TipoGarantiaTasaId
        {
            get { return Fields.TipoGarantiaTasaId[this]; }
            set { Fields.TipoGarantiaTasaId[this] = value; }
        }

        [DisplayName("Empleo Traspasado"), Column("Empleo_Traspasado")]
        public Int32? EmpleoTraspasado
        {
            get { return Fields.EmpleoTraspasado[this]; }
            set { Fields.EmpleoTraspasado[this] = value; }
        }

        [DisplayName("Empleo 6 Meses"), Column("Empleo_6_meses")]
        public Int32? Empleo6Meses
        {
            get { return Fields.Empleo6Meses[this]; }
            set { Fields.Empleo6Meses[this] = value; }
        }

        [DisplayName("Empleo Promedio"), Column("Empleo_promedio")]
        public Int32? EmpleoPromedio
        {
            get { return Fields.EmpleoPromedio[this]; }
            set { Fields.EmpleoPromedio[this] = value; }
        }

        [DisplayName("Empleo Promedio 2 Anos"), Column("Empleo_promedio_2_anos")]
        public Int32? EmpleoPromedio2Anos
        {
            get { return Fields.EmpleoPromedio2Anos[this]; }
            set { Fields.EmpleoPromedio2Anos[this] = value; }
        }

        [DisplayName("Inversion Traspasada"), Column("Inversion_traspasada"), Size(10), Scale(2)]
        public Decimal? InversionTraspasada
        {
            get { return Fields.InversionTraspasada[this]; }
            set { Fields.InversionTraspasada[this] = value; }
        }

        [DisplayName("Inversion 2 Anos"), Column("Inversion_2_anos"), Size(10), Scale(2)]
        public Decimal? Inversion2Anos
        {
            get { return Fields.Inversion2Anos[this]; }
            set { Fields.Inversion2Anos[this] = value; }
        }

        [DisplayName("Estado Empresa"), ForeignKey("estados_empresa", "EstadoEmpresaId"), LeftJoin("jEstadoEmpresa"), TextualField("EstadoEmpresaEstado")]
        public Int32? EstadoEmpresaId
        {
            get { return Fields.EstadoEmpresaId[this]; }
            set { Fields.EstadoEmpresaId[this] = value; }
        }

        [DisplayName("Fecha Alta Registro"), Column("Fecha_Alta_Registro")]
        public DateTime? FechaAltaRegistro
        {
            get { return Fields.FechaAltaRegistro[this]; }
            set { Fields.FechaAltaRegistro[this] = value; }
        }

        [DisplayName("Fecha Baja Registro"), Column("Fecha_Baja_Registro")]
        public DateTime? FechaBajaRegistro
        {
            get { return Fields.FechaBajaRegistro[this]; }
            set { Fields.FechaBajaRegistro[this] = value; }
        }

        [DisplayName("Fecha Baja Efecto"), Column("Fecha_Baja_Efecto")]
        public DateTime? FechaBajaEfecto
        {
            get { return Fields.FechaBajaEfecto[this]; }
            set { Fields.FechaBajaEfecto[this] = value; }
        }

        [DisplayName("Fecha Remision Ct"), Column("Fecha_Remision_CT")]
        public DateTime? FechaRemisionCt
        {
            get { return Fields.FechaRemisionCt[this]; }
            set { Fields.FechaRemisionCt[this] = value; }
        }

        [DisplayName("Fecha Informe Ct"), Column("Fecha_Informe_CT")]
        public DateTime? FechaInformeCt
        {
            get { return Fields.FechaInformeCt[this]; }
            set { Fields.FechaInformeCt[this] = value; }
        }

        [DisplayName("Fecha Remision Cr"), Column("Fecha_Remision_CR")]
        public DateTime? FechaRemisionCr
        {
            get { return Fields.FechaRemisionCr[this]; }
            set { Fields.FechaRemisionCr[this] = value; }
        }

        [DisplayName("Fecha Caducidad Inscripcion"), Column("Fecha_Caducidad_Inscripcion")]
        public DateTime? FechaCaducidadInscripcion
        {
            get { return Fields.FechaCaducidadInscripcion[this]; }
            set { Fields.FechaCaducidadInscripcion[this] = value; }
        }

        [DisplayName("Sentido Cr"), Column("Sentido_CR"), NotNull]
        public Int16? SentidoCr
        {
            get { return Fields.SentidoCr[this]; }
            set { Fields.SentidoCr[this] = value; }
        }

        [DisplayName("Sentido Ct"), Column("Sentido_CT"), NotNull]
        public Int16? SentidoCt
        {
            get { return Fields.SentidoCt[this]; }
            set { Fields.SentidoCt[this] = value; }
        }

        [DisplayName("Fecha Ins Solicitud"), Column("Fecha_Ins_Solicitud")]
        public DateTime? FechaInsSolicitud
        {
            get { return Fields.FechaInsSolicitud[this]; }
            set { Fields.FechaInsSolicitud[this] = value; }
        }

        [DisplayName("Fecha Ins Resolucion"), Column("Fecha_Ins_Resolucion")]
        public DateTime? FechaInsResolucion
        {
            get { return Fields.FechaInsResolucion[this]; }
            set { Fields.FechaInsResolucion[this] = value; }
        }

        [DisplayName("Fecha Ins Notificacion"), Column("Fecha_Ins_Notificacion")]
        public DateTime? FechaInsNotificacion
        {
            get { return Fields.FechaInsNotificacion[this]; }
            set { Fields.FechaInsNotificacion[this] = value; }
        }

        [DisplayName("Num Tasa Liquidacion"), Column("Num_Tasa_Liquidacion"), Size(20)]
        public String NumTasaLiquidacion
        {
            get { return Fields.NumTasaLiquidacion[this]; }
            set { Fields.NumTasaLiquidacion[this] = value; }
        }

        [DisplayName("Forma Juridica Juridica"), Expression("jFormaJuridica.[Forma_Juridica]")]
        public String FormaJuridicaJuridica
        {
            get { return Fields.FormaJuridicaJuridica[this]; }
            set { Fields.FormaJuridicaJuridica[this] = value; }
        }

        [DisplayName("Tecnico Nombre Tecnico"), Expression("jTecnico.[NombreTecnico]")]
        public String TecnicoNombreTecnico
        {
            get { return Fields.TecnicoNombreTecnico[this]; }
            set { Fields.TecnicoNombreTecnico[this] = value; }
        }

        [DisplayName("Tecnico"), Expression("jTecnico.[Tecnico]")]
        public String Tecnico
        {
            get { return Fields.Tecnico[this]; }
            set { Fields.Tecnico[this] = value; }
        }

        [DisplayName("Isla Nombre Isla"), Expression("jIsla.[NombreIsla]")]
        public String IslaNombreIsla
        {
            get { return Fields.IslaNombreIsla[this]; }
            set { Fields.IslaNombreIsla[this] = value; }
        }

        [DisplayName("Isla"), Expression("jIsla.[Isla]")]
        public String Isla
        {
            get { return Fields.Isla[this]; }
            set { Fields.Isla[this] = value; }
        }

        [DisplayName("Proyecto"), Expression("jProyecto.[Proyecto]")]
        public String Proyecto
        {
            get { return Fields.Proyecto[this]; }
            set { Fields.Proyecto[this] = value; }
        }

        [DisplayName("Proyecto Descripcion"), Expression("jProyecto.[Descripcion]")]
        public String ProyectoDescripcion
        {
            get { return Fields.ProyectoDescripcion[this]; }
            set { Fields.ProyectoDescripcion[this] = value; }
        }

        [DisplayName("Proyecto Fecha Primer Contacto"), Expression("jProyecto.[FechaPrimerContacto]")]
        public DateTime? ProyectoFechaPrimerContacto
        {
            get { return Fields.ProyectoFechaPrimerContacto[this]; }
            set { Fields.ProyectoFechaPrimerContacto[this] = value; }
        }

        [DisplayName("Proyecto Origen Id"), Expression("jProyecto.[OrigenId]")]
        public Int32? ProyectoOrigenId
        {
            get { return Fields.ProyectoOrigenId[this]; }
            set { Fields.ProyectoOrigenId[this] = value; }
        }

        [DisplayName("Proyecto Estado Proyecto Id"), Expression("jProyecto.[EstadoProyectoId]")]
        public Int32? ProyectoEstadoProyectoId
        {
            get { return Fields.ProyectoEstadoProyectoId[this]; }
            set { Fields.ProyectoEstadoProyectoId[this] = value; }
        }

        [DisplayName("Proyecto Tecnico Id"), Expression("jProyecto.[TecnicoId]")]
        public Int32? ProyectoTecnicoId
        {
            get { return Fields.ProyectoTecnicoId[this]; }
            set { Fields.ProyectoTecnicoId[this] = value; }
        }

        [DisplayName("Proyecto Confidencial"), Expression("jProyecto.[Confidencial]")]
        public Int16? ProyectoConfidencial
        {
            get { return Fields.ProyectoConfidencial[this]; }
            set { Fields.ProyectoConfidencial[this] = value; }
        }

        [DisplayName("Proyecto Contacto Principal Id"), Expression("jProyecto.[ContactoPrincipalId]")]
        public Int32? ProyectoContactoPrincipalId
        {
            get { return Fields.ProyectoContactoPrincipalId[this]; }
            set { Fields.ProyectoContactoPrincipalId[this] = value; }
        }

        [DisplayName("Proyecto Prescriptor Id"), Expression("jProyecto.[PrescriptorId]")]
        public Int32? ProyectoPrescriptorId
        {
            get { return Fields.ProyectoPrescriptorId[this]; }
            set { Fields.ProyectoPrescriptorId[this] = value; }
        }

        [DisplayName("Proyecto Accion Id"), Expression("jProyecto.[AccionId]")]
        public Int32? ProyectoAccionId
        {
            get { return Fields.ProyectoAccionId[this]; }
            set { Fields.ProyectoAccionId[this] = value; }
        }

        [DisplayName("Proyecto Inversion"), Expression("jProyecto.[Inversion]")]
        public Int32? ProyectoInversion
        {
            get { return Fields.ProyectoInversion[this]; }
            set { Fields.ProyectoInversion[this] = value; }
        }

        [DisplayName("Proyecto User Id"), Expression("jProyecto.[UserId]")]
        public Int32? ProyectoUserId
        {
            get { return Fields.ProyectoUserId[this]; }
            set { Fields.ProyectoUserId[this] = value; }
        }

        [DisplayName("Proyecto Fecha Modificacion"), Expression("jProyecto.[fechaModificacion]")]
        public DateTime? ProyectoFechaModificacion
        {
            get { return Fields.ProyectoFechaModificacion[this]; }
            set { Fields.ProyectoFechaModificacion[this] = value; }
        }

        [DisplayName("Tipologia Capital Capital"), Expression("jTipologiaCapital.[Tipologia_Capital]")]
        public String TipologiaCapitalCapital
        {
            get { return Fields.TipologiaCapitalCapital[this]; }
            set { Fields.TipologiaCapitalCapital[this] = value; }
        }

        [DisplayName("Tipo Garantia Tasa Garantia Tasa"), Expression("jTipoGarantiaTasa.[Tipo_Garantia_Tasa]")]
        public String TipoGarantiaTasaGarantiaTasa
        {
            get { return Fields.TipoGarantiaTasaGarantiaTasa[this]; }
            set { Fields.TipoGarantiaTasaGarantiaTasa[this] = value; }
        }

        [DisplayName("Estado Empresa Estado"), Expression("jEstadoEmpresa.[Estado]")]
        public String EstadoEmpresaEstado
        {
            get { return Fields.EstadoEmpresaEstado[this]; }
            set { Fields.EstadoEmpresaEstado[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmpresaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Razon; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmpresasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmpresaId;
            public StringField Razon;
            public Int32Field FormaJuridicaId;
            public StringField NExpediente;
            public Int32Field TecnicoId;
            public StringField Cif;
            public StringField Direccion;
            public StringField Poblacion;
            public Int32Field IslaId;
            public StringField TelefonoFijo;
            public StringField Movil;
            public StringField Email;
            public Int32Field ProyectoId;
            public StringField Expediente;
            public StringField MotivoExencion;
            public Int32Field TipologiaCapitalId;
            public Int32Field TipoGarantiaTasaId;
            public Int32Field EmpleoTraspasado;
            public Int32Field Empleo6Meses;
            public Int32Field EmpleoPromedio;
            public Int32Field EmpleoPromedio2Anos;
            public DecimalField InversionTraspasada;
            public DecimalField Inversion2Anos;
            public Int32Field EstadoEmpresaId;
            public DateTimeField FechaAltaRegistro;
            public DateTimeField FechaBajaRegistro;
            public DateTimeField FechaBajaEfecto;
            public DateTimeField FechaRemisionCt;
            public DateTimeField FechaInformeCt;
            public DateTimeField FechaRemisionCr;
            public DateTimeField FechaCaducidadInscripcion;
            public Int16Field SentidoCr;
            public Int16Field SentidoCt;
            public DateTimeField FechaInsSolicitud;
            public DateTimeField FechaInsResolucion;
            public DateTimeField FechaInsNotificacion;
            public StringField NumTasaLiquidacion;

            public StringField FormaJuridicaJuridica;

            public StringField TecnicoNombreTecnico;
            public StringField Tecnico;

            public StringField IslaNombreIsla;
            public StringField Isla;

            public StringField Proyecto;
            public StringField ProyectoDescripcion;
            public DateTimeField ProyectoFechaPrimerContacto;
            public Int32Field ProyectoOrigenId;
            public Int32Field ProyectoEstadoProyectoId;
            public Int32Field ProyectoTecnicoId;
            public Int16Field ProyectoConfidencial;
            public Int32Field ProyectoContactoPrincipalId;
            public Int32Field ProyectoPrescriptorId;
            public Int32Field ProyectoAccionId;
            public Int32Field ProyectoInversion;
            public Int32Field ProyectoUserId;
            public DateTimeField ProyectoFechaModificacion;

            public StringField TipologiaCapitalCapital;

            public StringField TipoGarantiaTasaGarantiaTasa;

            public StringField EstadoEmpresaEstado;
        }
    }
}
