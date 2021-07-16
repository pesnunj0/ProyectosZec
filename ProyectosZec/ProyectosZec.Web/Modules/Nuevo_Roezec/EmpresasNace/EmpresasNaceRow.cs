﻿
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("empresas_nace")]
    [DisplayName("Empresas Nace"), InstanceName("Empresas Nace")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    public sealed class EmpresasNaceRow : Row, IIdRow
    {
        [DisplayName("Empresa Nace Id"), Identity]
        public Int32? EmpresaNaceId
        {
            get { return Fields.EmpresaNaceId[this]; }
            set { Fields.EmpresaNaceId[this] = value; }
        }

        [DisplayName("Empresa"), NotNull, ForeignKey("empresas", "EmpresaId"), LeftJoin("jEmpresa"), TextualField("EmpresaRazon")]
        public Int32? EmpresaId
        {
            get { return Fields.EmpresaId[this]; }
            set { Fields.EmpresaId[this] = value; }
        }

        [DisplayName("Nace"), NotNull, ForeignKey("naces", "NaceId"), LeftJoin("jNace"), TextualField("Nace")]
        public Int32? NaceId
        {
            get { return Fields.NaceId[this]; }
            set { Fields.NaceId[this] = value; }
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

        //[DisplayName("Empresa Fecha Alta Registro"), Expression("jEmpresa.[Fecha_Alta_Registro]")]
        //public DateTime? EmpresaFechaAltaRegistro
        //{
        //    get { return Fields.EmpresaFechaAltaRegistro[this]; }
        //    set { Fields.EmpresaFechaAltaRegistro[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Baja Registro"), Expression("jEmpresa.[Fecha_Baja_Registro]")]
        //public DateTime? EmpresaFechaBajaRegistro
        //{
        //    get { return Fields.EmpresaFechaBajaRegistro[this]; }
        //    set { Fields.EmpresaFechaBajaRegistro[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Baja Efecto"), Expression("jEmpresa.[Fecha_Baja_Efecto]")]
        //public DateTime? EmpresaFechaBajaEfecto
        //{
        //    get { return Fields.EmpresaFechaBajaEfecto[this]; }
        //    set { Fields.EmpresaFechaBajaEfecto[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Remision Ct"), Expression("jEmpresa.[Fecha_Remision_CT]")]
        //public DateTime? EmpresaFechaRemisionCt
        //{
        //    get { return Fields.EmpresaFechaRemisionCt[this]; }
        //    set { Fields.EmpresaFechaRemisionCt[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Informe Ct"), Expression("jEmpresa.[Fecha_Informe_CT]")]
        //public DateTime? EmpresaFechaInformeCt
        //{
        //    get { return Fields.EmpresaFechaInformeCt[this]; }
        //    set { Fields.EmpresaFechaInformeCt[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Remision Cr"), Expression("jEmpresa.[Fecha_Remision_CR]")]
        //public DateTime? EmpresaFechaRemisionCr
        //{
        //    get { return Fields.EmpresaFechaRemisionCr[this]; }
        //    set { Fields.EmpresaFechaRemisionCr[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Caducidad Inscripcion"), Expression("jEmpresa.[Fecha_Caducidad_Inscripcion]")]
        //public DateTime? EmpresaFechaCaducidadInscripcion
        //{
        //    get { return Fields.EmpresaFechaCaducidadInscripcion[this]; }
        //    set { Fields.EmpresaFechaCaducidadInscripcion[this] = value; }
        //}

        //[DisplayName("Empresa Sentido Cr"), Expression("jEmpresa.[Sentido_CR]")]
        //public Int16? EmpresaSentidoCr
        //{
        //    get { return Fields.EmpresaSentidoCr[this]; }
        //    set { Fields.EmpresaSentidoCr[this] = value; }
        //}

        //[DisplayName("Empresa Sentido Ct"), Expression("jEmpresa.[Sentido_CT]")]
        //public Int16? EmpresaSentidoCt
        //{
        //    get { return Fields.EmpresaSentidoCt[this]; }
        //    set { Fields.EmpresaSentidoCt[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Ins Solicitud"), Expression("jEmpresa.[Fecha_Ins_Solicitud]")]
        //public DateTime? EmpresaFechaInsSolicitud
        //{
        //    get { return Fields.EmpresaFechaInsSolicitud[this]; }
        //    set { Fields.EmpresaFechaInsSolicitud[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Ins Resolucion"), Expression("jEmpresa.[Fecha_Ins_Resolucion]")]
        //public DateTime? EmpresaFechaInsResolucion
        //{
        //    get { return Fields.EmpresaFechaInsResolucion[this]; }
        //    set { Fields.EmpresaFechaInsResolucion[this] = value; }
        //}

        //[DisplayName("Empresa Fecha Ins Notificacion"), Expression("jEmpresa.[Fecha_Ins_Notificacion]")]
        //public DateTime? EmpresaFechaInsNotificacion
        //{
        //    get { return Fields.EmpresaFechaInsNotificacion[this]; }
        //    set { Fields.EmpresaFechaInsNotificacion[this] = value; }
        //}

        [DisplayName("Empresa Num Tasa Liquidacion"), Expression("jEmpresa.[Num_Tasa_Liquidacion]")]
        public String EmpresaNumTasaLiquidacion
        {
            get { return Fields.EmpresaNumTasaLiquidacion[this]; }
            set { Fields.EmpresaNumTasaLiquidacion[this] = value; }
        }

        [DisplayName("Nace"), Expression("jNace.[Nace]")]
        public String Nace
        {
            get { return Fields.Nace[this]; }
            set { Fields.Nace[this] = value; }
        }

        [DisplayName("Nace Codigo"), Expression("jNace.[Codigo]")]
        public String NaceCodigo
        {
            get { return Fields.NaceCodigo[this]; }
            set { Fields.NaceCodigo[this] = value; }
        }

        [DisplayName("Nace Descripcion"), Expression("jNace.[Descripcion]")]
        public String NaceDescripcion
        {
            get { return Fields.NaceDescripcion[this]; }
            set { Fields.NaceDescripcion[this] = value; }
        }

        [DisplayName("Nace Subsector Id"), Expression("jNace.[SubsectorId]")]
        public Int32? NaceSubsectorId
        {
            get { return Fields.NaceSubsectorId[this]; }
            set { Fields.NaceSubsectorId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmpresaNaceId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmpresasNaceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmpresaNaceId;
            public Int32Field EmpresaId;
            public Int32Field NaceId;

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
            //public DateTimeField EmpresaFechaAltaRegistro;
            //public DateTimeField EmpresaFechaBajaRegistro;
            //public DateTimeField EmpresaFechaBajaEfecto;
            //public DateTimeField EmpresaFechaRemisionCt;
            //public DateTimeField EmpresaFechaInformeCt;
            //public DateTimeField EmpresaFechaRemisionCr;
            //public DateTimeField EmpresaFechaCaducidadInscripcion;
            //public Int16Field EmpresaSentidoCr;
            //public Int16Field EmpresaSentidoCt;
            //public DateTimeField EmpresaFechaInsSolicitud;
            //public DateTimeField EmpresaFechaInsResolucion;
            //public DateTimeField EmpresaFechaInsNotificacion;
            public StringField EmpresaNumTasaLiquidacion;

            public StringField Nace;
            public StringField NaceCodigo;
            public StringField NaceDescripcion;
            public Int32Field NaceSubsectorId;
        }
    }
}
