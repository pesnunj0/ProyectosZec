
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("historial_empresas")]
    [DisplayName("Historial Empresas"), InstanceName("Historial Empresas")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    public sealed class HistorialEmpresasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Historial Id"), Identity]
        public Int32? HistorialId
        {
            get { return Fields.HistorialId[this]; }
            set { Fields.HistorialId[this] = value; }
        }

        [DisplayName("Empresa"), NotNull, ForeignKey("empresas", "EmpresaId"), LeftJoin("jEmpresa"), TextualField("EmpresaRazon")]
        public Int32? EmpresaId
        {
            get { return Fields.EmpresaId[this]; }
            set { Fields.EmpresaId[this] = value; }
        }

        [DisplayName("Procedimiento"), NotNull, ForeignKey("procedimientos", "ProcedimientoId"), LeftJoin("jProcedimiento"), TextualField("Procedimiento")]
        public Int32? ProcedimientoId
        {
            get { return Fields.ProcedimientoId[this]; }
            set { Fields.ProcedimientoId[this] = value; }
        }

        [DisplayName("Fecha Inicio"), Column("Fecha_Inicio"), NotNull]
        public DateTime? FechaInicio
        {
            get { return Fields.FechaInicio[this]; }
            set { Fields.FechaInicio[this] = value; }
        }

        [DisplayName("Fecha Resolucion"), Column("Fecha_Resolucion")]
        public DateTime? FechaResolucion
        {
            get { return Fields.FechaResolucion[this]; }
            set { Fields.FechaResolucion[this] = value; }
        }

        [DisplayName("Sentido Resolucion"), Column("Sentido_Resolucion")]
        public Int16? SentidoResolucion
        {
            get { return Fields.SentidoResolucion[this]; }
            set { Fields.SentidoResolucion[this] = value; }
        }

        [DisplayName("Fecha Efecto"), Column("Fecha_efecto")]
        public DateTime? FechaEfecto
        {
            get { return Fields.FechaEfecto[this]; }
            set { Fields.FechaEfecto[this] = value; }
        }

        [DisplayName("Acuse Inicio"), Column("Acuse_Inicio")]
        public DateTime? AcuseInicio
        {
            get { return Fields.AcuseInicio[this]; }
            set { Fields.AcuseInicio[this] = value; }
        }

        [DisplayName("Persona Acuse Incio"), Column("Persona_Acuse_IncioId"), ForeignKey("contactos", "ContactoId"), LeftJoin("jPersonaAcuseIncio"), TextualField("PersonaAcuseIncioNombre")]
        public Int32? PersonaAcuseIncioId
        {
            get { return Fields.PersonaAcuseIncioId[this]; }
            set { Fields.PersonaAcuseIncioId[this] = value; }
        }

        [DisplayName("Acuse Resolucion"), Column("Acuse_Resolucion")]
        public DateTime? AcuseResolucion
        {
            get { return Fields.AcuseResolucion[this]; }
            set { Fields.AcuseResolucion[this] = value; }
        }

        [DisplayName("Persona Acuse Resolucion"), Column("Persona_Acuse_ResolucionId"), ForeignKey("contactos", "ContactoId"), LeftJoin("jPersonaAcuseResolucion"), TextualField("PersonaAcuseResolucionNombre")]
        public Int32? PersonaAcuseResolucionId
        {
            get { return Fields.PersonaAcuseResolucionId[this]; }
            set { Fields.PersonaAcuseResolucionId[this] = value; }
        }

        [DisplayName("Observaciones"), Size(200), QuickSearch]
        public String Observaciones
        {
            get { return Fields.Observaciones[this]; }
            set { Fields.Observaciones[this] = value; }
        }

        [DisplayName("Ficheros"), Size(1000)]
        public String Ficheros
        {
            get { return Fields.Ficheros[this]; }
            set { Fields.Ficheros[this] = value; }
        }

        [DisplayName("Empresa Razon"), Expression("jEmpresa.[Razon]")]
        public String EmpresaRazon
        {
            get { return Fields.EmpresaRazon[this]; }
            set { Fields.EmpresaRazon[this] = value; }
        }

        [DisplayName("Empresa Forma Juridica Id"), Expression("jEmpresa.[FormaJuridicaId]")]
        public Int32? EmpresaFormaJuridicaId
        {
            get { return Fields.EmpresaFormaJuridicaId[this]; }
            set { Fields.EmpresaFormaJuridicaId[this] = value; }
        }

        [DisplayName("Empresa N Expediente"), Expression("jEmpresa.[N_Expediente]")]
        public String EmpresaNExpediente
        {
            get { return Fields.EmpresaNExpediente[this]; }
            set { Fields.EmpresaNExpediente[this] = value; }
        }

        [DisplayName("Empresa Tecnico Id"), Expression("jEmpresa.[TecnicoId]")]
        public Int32? EmpresaTecnicoId
        {
            get { return Fields.EmpresaTecnicoId[this]; }
            set { Fields.EmpresaTecnicoId[this] = value; }
        }

        [DisplayName("Empresa Cif"), Expression("jEmpresa.[Cif]")]
        public String EmpresaCif
        {
            get { return Fields.EmpresaCif[this]; }
            set { Fields.EmpresaCif[this] = value; }
        }

        [DisplayName("Empresa Direccion"), Expression("jEmpresa.[Direccion]")]
        public String EmpresaDireccion
        {
            get { return Fields.EmpresaDireccion[this]; }
            set { Fields.EmpresaDireccion[this] = value; }
        }

        [DisplayName("Empresa Poblacion"), Expression("jEmpresa.[Poblacion]")]
        public String EmpresaPoblacion
        {
            get { return Fields.EmpresaPoblacion[this]; }
            set { Fields.EmpresaPoblacion[this] = value; }
        }

        [DisplayName("Empresa Isla Id"), Expression("jEmpresa.[IslaId]")]
        public Int32? EmpresaIslaId
        {
            get { return Fields.EmpresaIslaId[this]; }
            set { Fields.EmpresaIslaId[this] = value; }
        }

        [DisplayName("Empresa Telefono Fijo"), Expression("jEmpresa.[Telefono_fijo]")]
        public String EmpresaTelefonoFijo
        {
            get { return Fields.EmpresaTelefonoFijo[this]; }
            set { Fields.EmpresaTelefonoFijo[this] = value; }
        }

        [DisplayName("Empresa Movil"), Expression("jEmpresa.[Movil]")]
        public String EmpresaMovil
        {
            get { return Fields.EmpresaMovil[this]; }
            set { Fields.EmpresaMovil[this] = value; }
        }

        [DisplayName("Empresa Email"), Expression("jEmpresa.[Email]")]
        public String EmpresaEmail
        {
            get { return Fields.EmpresaEmail[this]; }
            set { Fields.EmpresaEmail[this] = value; }
        }

        [DisplayName("Empresa Proyecto Id"), Expression("jEmpresa.[ProyectoId]")]
        public Int32? EmpresaProyectoId
        {
            get { return Fields.EmpresaProyectoId[this]; }
            set { Fields.EmpresaProyectoId[this] = value; }
        }

        [DisplayName("Empresa Expediente"), Expression("jEmpresa.[Expediente]")]
        public String EmpresaExpediente
        {
            get { return Fields.EmpresaExpediente[this]; }
            set { Fields.EmpresaExpediente[this] = value; }
        }

        [DisplayName("Empresa Motivo Exencion"), Expression("jEmpresa.[Motivo_Exencion]")]
        public String EmpresaMotivoExencion
        {
            get { return Fields.EmpresaMotivoExencion[this]; }
            set { Fields.EmpresaMotivoExencion[this] = value; }
        }

        [DisplayName("Empresa Tipologia Capital Id"), Expression("jEmpresa.[Tipologia_CapitalId]")]
        public Int32? EmpresaTipologiaCapitalId
        {
            get { return Fields.EmpresaTipologiaCapitalId[this]; }
            set { Fields.EmpresaTipologiaCapitalId[this] = value; }
        }

        [DisplayName("Empresa Tipo Garantia Tasa Id"), Expression("jEmpresa.[Tipo_Garantia_TasaId]")]
        public Int32? EmpresaTipoGarantiaTasaId
        {
            get { return Fields.EmpresaTipoGarantiaTasaId[this]; }
            set { Fields.EmpresaTipoGarantiaTasaId[this] = value; }
        }

        [DisplayName("Empresa Empleo Traspasado"), Expression("jEmpresa.[Empleo_Traspasado]")]
        public Int32? EmpresaEmpleoTraspasado
        {
            get { return Fields.EmpresaEmpleoTraspasado[this]; }
            set { Fields.EmpresaEmpleoTraspasado[this] = value; }
        }

        [DisplayName("Empresa Empleo 6 Meses"), Expression("jEmpresa.[Empleo_6_meses]")]
        public Int32? EmpresaEmpleo6Meses
        {
            get { return Fields.EmpresaEmpleo6Meses[this]; }
            set { Fields.EmpresaEmpleo6Meses[this] = value; }
        }

        [DisplayName("Empresa Empleo Promedio"), Expression("jEmpresa.[Empleo_promedio]")]
        public Int32? EmpresaEmpleoPromedio
        {
            get { return Fields.EmpresaEmpleoPromedio[this]; }
            set { Fields.EmpresaEmpleoPromedio[this] = value; }
        }

        [DisplayName("Empresa Empleo Promedio 2 Anos"), Expression("jEmpresa.[Empleo_promedio_2_anos]")]
        public Int32? EmpresaEmpleoPromedio2Anos
        {
            get { return Fields.EmpresaEmpleoPromedio2Anos[this]; }
            set { Fields.EmpresaEmpleoPromedio2Anos[this] = value; }
        }

        [DisplayName("Empresa Inversion Traspasada"), Expression("jEmpresa.[Inversion_traspasada]")]
        public Decimal? EmpresaInversionTraspasada
        {
            get { return Fields.EmpresaInversionTraspasada[this]; }
            set { Fields.EmpresaInversionTraspasada[this] = value; }
        }

        [DisplayName("Empresa Inversion 2 Anos"), Expression("jEmpresa.[Inversion_2_anos]")]
        public Decimal? EmpresaInversion2Anos
        {
            get { return Fields.EmpresaInversion2Anos[this]; }
            set { Fields.EmpresaInversion2Anos[this] = value; }
        }

        [DisplayName("Empresa Estado Empresa Id"), Expression("jEmpresa.[EstadoEmpresaId]")]
        public Int32? EmpresaEstadoEmpresaId
        {
            get { return Fields.EmpresaEstadoEmpresaId[this]; }
            set { Fields.EmpresaEstadoEmpresaId[this] = value; }
        }

        [DisplayName("Empresa Fecha Alta Registro"), Expression("jEmpresa.[Fecha_Alta_Registro]")]
        public DateTime? EmpresaFechaAltaRegistro
        {
            get { return Fields.EmpresaFechaAltaRegistro[this]; }
            set { Fields.EmpresaFechaAltaRegistro[this] = value; }
        }

        [DisplayName("Empresa Fecha Baja Registro"), Expression("jEmpresa.[Fecha_Baja_Registro]")]
        public DateTime? EmpresaFechaBajaRegistro
        {
            get { return Fields.EmpresaFechaBajaRegistro[this]; }
            set { Fields.EmpresaFechaBajaRegistro[this] = value; }
        }

        [DisplayName("Empresa Fecha Baja Efecto"), Expression("jEmpresa.[Fecha_Baja_Efecto]")]
        public DateTime? EmpresaFechaBajaEfecto
        {
            get { return Fields.EmpresaFechaBajaEfecto[this]; }
            set { Fields.EmpresaFechaBajaEfecto[this] = value; }
        }

        [DisplayName("Empresa Fecha Remision Ct"), Expression("jEmpresa.[Fecha_Remision_CT]")]
        public DateTime? EmpresaFechaRemisionCt
        {
            get { return Fields.EmpresaFechaRemisionCt[this]; }
            set { Fields.EmpresaFechaRemisionCt[this] = value; }
        }

        [DisplayName("Empresa Fecha Informe Ct"), Expression("jEmpresa.[Fecha_Informe_CT]")]
        public DateTime? EmpresaFechaInformeCt
        {
            get { return Fields.EmpresaFechaInformeCt[this]; }
            set { Fields.EmpresaFechaInformeCt[this] = value; }
        }

        [DisplayName("Empresa Fecha Remision Cr"), Expression("jEmpresa.[Fecha_Remision_CR]")]
        public DateTime? EmpresaFechaRemisionCr
        {
            get { return Fields.EmpresaFechaRemisionCr[this]; }
            set { Fields.EmpresaFechaRemisionCr[this] = value; }
        }

        [DisplayName("Empresa Fecha Caducidad Inscripcion"), Expression("jEmpresa.[Fecha_Caducidad_Inscripcion]")]
        public DateTime? EmpresaFechaCaducidadInscripcion
        {
            get { return Fields.EmpresaFechaCaducidadInscripcion[this]; }
            set { Fields.EmpresaFechaCaducidadInscripcion[this] = value; }
        }

        [DisplayName("Empresa Sentido Cr"), Expression("jEmpresa.[Sentido_CR]")]
        public Int16? EmpresaSentidoCr
        {
            get { return Fields.EmpresaSentidoCr[this]; }
            set { Fields.EmpresaSentidoCr[this] = value; }
        }

        [DisplayName("Empresa Sentido Ct"), Expression("jEmpresa.[Sentido_CT]")]
        public Int16? EmpresaSentidoCt
        {
            get { return Fields.EmpresaSentidoCt[this]; }
            set { Fields.EmpresaSentidoCt[this] = value; }
        }

        [DisplayName("Empresa Fecha Ins Solicitud"), Expression("jEmpresa.[Fecha_Ins_Solicitud]")]
        public DateTime? EmpresaFechaInsSolicitud
        {
            get { return Fields.EmpresaFechaInsSolicitud[this]; }
            set { Fields.EmpresaFechaInsSolicitud[this] = value; }
        }

        [DisplayName("Empresa Fecha Ins Resolucion"), Expression("jEmpresa.[Fecha_Ins_Resolucion]")]
        public DateTime? EmpresaFechaInsResolucion
        {
            get { return Fields.EmpresaFechaInsResolucion[this]; }
            set { Fields.EmpresaFechaInsResolucion[this] = value; }
        }

        [DisplayName("Empresa Fecha Ins Notificacion"), Expression("jEmpresa.[Fecha_Ins_Notificacion]")]
        public DateTime? EmpresaFechaInsNotificacion
        {
            get { return Fields.EmpresaFechaInsNotificacion[this]; }
            set { Fields.EmpresaFechaInsNotificacion[this] = value; }
        }

        [DisplayName("Empresa Num Tasa Liquidacion"), Expression("jEmpresa.[Num_Tasa_Liquidacion]")]
        public String EmpresaNumTasaLiquidacion
        {
            get { return Fields.EmpresaNumTasaLiquidacion[this]; }
            set { Fields.EmpresaNumTasaLiquidacion[this] = value; }
        }

        [DisplayName("Procedimiento"), Expression("jProcedimiento.[Procedimiento]")]
        public String Procedimiento
        {
            get { return Fields.Procedimiento[this]; }
            set { Fields.Procedimiento[this] = value; }
        }

        [DisplayName("Persona Acuse Incio Nombre"), Expression("jPersonaAcuseIncio.[Nombre]")]
        public String PersonaAcuseIncioNombre
        {
            get { return Fields.PersonaAcuseIncioNombre[this]; }
            set { Fields.PersonaAcuseIncioNombre[this] = value; }
        }

        [DisplayName("Persona Acuse Incio Apellidos"), Expression("jPersonaAcuseIncio.[Apellidos]")]
        public String PersonaAcuseIncioApellidos
        {
            get { return Fields.PersonaAcuseIncioApellidos[this]; }
            set { Fields.PersonaAcuseIncioApellidos[this] = value; }
        }

        [DisplayName("Persona Acuse Incio Nif"), Expression("jPersonaAcuseIncio.[Nif]")]
        public String PersonaAcuseIncioNif
        {
            get { return Fields.PersonaAcuseIncioNif[this]; }
            set { Fields.PersonaAcuseIncioNif[this] = value; }
        }

        [DisplayName("Persona Acuse Incio Telefono Fijo"), Expression("jPersonaAcuseIncio.[Telefono_fijo]")]
        public String PersonaAcuseIncioTelefonoFijo
        {
            get { return Fields.PersonaAcuseIncioTelefonoFijo[this]; }
            set { Fields.PersonaAcuseIncioTelefonoFijo[this] = value; }
        }

        [DisplayName("Persona Acuse Incio Movil"), Expression("jPersonaAcuseIncio.[Movil]")]
        public String PersonaAcuseIncioMovil
        {
            get { return Fields.PersonaAcuseIncioMovil[this]; }
            set { Fields.PersonaAcuseIncioMovil[this] = value; }
        }

        [DisplayName("Persona Acuse Incio Idioma Id"), Expression("jPersonaAcuseIncio.[IdiomaId]")]
        public Int32? PersonaAcuseIncioIdiomaId
        {
            get { return Fields.PersonaAcuseIncioIdiomaId[this]; }
            set { Fields.PersonaAcuseIncioIdiomaId[this] = value; }
        }

        [DisplayName("Persona Acuse Incio Email"), Expression("jPersonaAcuseIncio.[Email]")]
        public String PersonaAcuseIncioEmail
        {
            get { return Fields.PersonaAcuseIncioEmail[this]; }
            set { Fields.PersonaAcuseIncioEmail[this] = value; }
        }

        [DisplayName("Persona Acuse Resolucion Nombre"), Expression("jPersonaAcuseResolucion.[Nombre]")]
        public String PersonaAcuseResolucionNombre
        {
            get { return Fields.PersonaAcuseResolucionNombre[this]; }
            set { Fields.PersonaAcuseResolucionNombre[this] = value; }
        }

        [DisplayName("Persona Acuse Resolucion Apellidos"), Expression("jPersonaAcuseResolucion.[Apellidos]")]
        public String PersonaAcuseResolucionApellidos
        {
            get { return Fields.PersonaAcuseResolucionApellidos[this]; }
            set { Fields.PersonaAcuseResolucionApellidos[this] = value; }
        }

        [DisplayName("Persona Acuse Resolucion Nif"), Expression("jPersonaAcuseResolucion.[Nif]")]
        public String PersonaAcuseResolucionNif
        {
            get { return Fields.PersonaAcuseResolucionNif[this]; }
            set { Fields.PersonaAcuseResolucionNif[this] = value; }
        }

        [DisplayName("Persona Acuse Resolucion Telefono Fijo"), Expression("jPersonaAcuseResolucion.[Telefono_fijo]")]
        public String PersonaAcuseResolucionTelefonoFijo
        {
            get { return Fields.PersonaAcuseResolucionTelefonoFijo[this]; }
            set { Fields.PersonaAcuseResolucionTelefonoFijo[this] = value; }
        }

        [DisplayName("Persona Acuse Resolucion Movil"), Expression("jPersonaAcuseResolucion.[Movil]")]
        public String PersonaAcuseResolucionMovil
        {
            get { return Fields.PersonaAcuseResolucionMovil[this]; }
            set { Fields.PersonaAcuseResolucionMovil[this] = value; }
        }

        [DisplayName("Persona Acuse Resolucion Idioma Id"), Expression("jPersonaAcuseResolucion.[IdiomaId]")]
        public Int32? PersonaAcuseResolucionIdiomaId
        {
            get { return Fields.PersonaAcuseResolucionIdiomaId[this]; }
            set { Fields.PersonaAcuseResolucionIdiomaId[this] = value; }
        }

        [DisplayName("Persona Acuse Resolucion Email"), Expression("jPersonaAcuseResolucion.[Email]")]
        public String PersonaAcuseResolucionEmail
        {
            get { return Fields.PersonaAcuseResolucionEmail[this]; }
            set { Fields.PersonaAcuseResolucionEmail[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.HistorialId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Observaciones; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HistorialEmpresasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field HistorialId;
            public Int32Field EmpresaId;
            public Int32Field ProcedimientoId;
            public DateTimeField FechaInicio;
            public DateTimeField FechaResolucion;
            public Int16Field SentidoResolucion;
            public DateTimeField FechaEfecto;
            public DateTimeField AcuseInicio;
            public Int32Field PersonaAcuseIncioId;
            public DateTimeField AcuseResolucion;
            public Int32Field PersonaAcuseResolucionId;
            public StringField Observaciones;
            public StringField Ficheros;

            public StringField EmpresaRazon;
            public Int32Field EmpresaFormaJuridicaId;
            public StringField EmpresaNExpediente;
            public Int32Field EmpresaTecnicoId;
            public StringField EmpresaCif;
            public StringField EmpresaDireccion;
            public StringField EmpresaPoblacion;
            public Int32Field EmpresaIslaId;
            public StringField EmpresaTelefonoFijo;
            public StringField EmpresaMovil;
            public StringField EmpresaEmail;
            public Int32Field EmpresaProyectoId;
            public StringField EmpresaExpediente;
            public StringField EmpresaMotivoExencion;
            public Int32Field EmpresaTipologiaCapitalId;
            public Int32Field EmpresaTipoGarantiaTasaId;
            public Int32Field EmpresaEmpleoTraspasado;
            public Int32Field EmpresaEmpleo6Meses;
            public Int32Field EmpresaEmpleoPromedio;
            public Int32Field EmpresaEmpleoPromedio2Anos;
            public DecimalField EmpresaInversionTraspasada;
            public DecimalField EmpresaInversion2Anos;
            public Int32Field EmpresaEstadoEmpresaId;
            public DateTimeField EmpresaFechaAltaRegistro;
            public DateTimeField EmpresaFechaBajaRegistro;
            public DateTimeField EmpresaFechaBajaEfecto;
            public DateTimeField EmpresaFechaRemisionCt;
            public DateTimeField EmpresaFechaInformeCt;
            public DateTimeField EmpresaFechaRemisionCr;
            public DateTimeField EmpresaFechaCaducidadInscripcion;
            public Int16Field EmpresaSentidoCr;
            public Int16Field EmpresaSentidoCt;
            public DateTimeField EmpresaFechaInsSolicitud;
            public DateTimeField EmpresaFechaInsResolucion;
            public DateTimeField EmpresaFechaInsNotificacion;
            public StringField EmpresaNumTasaLiquidacion;

            public StringField Procedimiento;

            public StringField PersonaAcuseIncioNombre;
            public StringField PersonaAcuseIncioApellidos;
            public StringField PersonaAcuseIncioNif;
            public StringField PersonaAcuseIncioTelefonoFijo;
            public StringField PersonaAcuseIncioMovil;
            public Int32Field PersonaAcuseIncioIdiomaId;
            public StringField PersonaAcuseIncioEmail;

            public StringField PersonaAcuseResolucionNombre;
            public StringField PersonaAcuseResolucionApellidos;
            public StringField PersonaAcuseResolucionNif;
            public StringField PersonaAcuseResolucionTelefonoFijo;
            public StringField PersonaAcuseResolucionMovil;
            public Int32Field PersonaAcuseResolucionIdiomaId;
            public StringField PersonaAcuseResolucionEmail;
        }
    }
}
