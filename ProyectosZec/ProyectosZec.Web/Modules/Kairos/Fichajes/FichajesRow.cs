
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[KRSS_Fichajes]")]
    [DisplayName("Fichajes"), InstanceName("Fichajes")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Modify")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]
    public sealed class FichajesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Empleado"), Column("idEmpleado"), ForeignKey("[dbo].Krs_Empleados", "Id"), LeftJoin("jEmpleados")]
        
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

        [DisplayName("Dpto Id"), Expression("jEmpleados.[idDepartamento]"), ForeignKey("KRS_Departamentos", "id"), LeftJoin("jDepartamentos")]

        public Int32? DptoId
        {
            get { return Fields.DptoId[this]; }
            set { Fields.DptoId[this] = value; }
        }

        [DisplayName("Codigo Cliente"), Column("codigoCliente"), NotNull]
        public Int64? CodigoCliente
        {
            get { return Fields.CodigoCliente[this]; }
            set { Fields.CodigoCliente[this] = value; }
        }

        [DisplayName("Fecha Hora"), Column("fechaHora"), NotNull]
        public DateTime? FechaHora
        {
            get { return Fields.FechaHora[this]; }
            set { Fields.FechaHora[this] = value; }
        }

        [DisplayName("Hora"), Expression("RIGHT(CONVERT(DATETIME, T0.[fechaHora], 108),8)")]
        public String Hora
        {
            get { return Fields.Hora[this]; }
            set { Fields.Hora[this] = value; }
        }


        [DisplayName("Observaciones"), Column("observaciones"), Size(1000)]
        public String Observaciones
        {
            get { return Fields.Observaciones[this]; }
            set { Fields.Observaciones[this] = value; }
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


        [DisplayName("Gps Posicion Latitud"), Column("gps_Posicion_Latitud"), Size(100), NotNull]
        public String GpsPosicionLatitud
        {
            get { return Fields.GpsPosicionLatitud[this]; }
            set { Fields.GpsPosicionLatitud[this] = value; }
        }

        [DisplayName("Gps Posicion Longitud"), Column("gps_Posicion_Longitud"), Size(100), NotNull]
        public String GpsPosicionLongitud
        {
            get { return Fields.GpsPosicionLongitud[this]; }
            set { Fields.GpsPosicionLongitud[this] = value; }
        }

        [DisplayName("Gps Fecha Hora"), Column("gps_FechaHora")]
        public DateTime? GpsFechaHora
        {
            get { return Fields.GpsFechaHora[this]; }
            set { Fields.GpsFechaHora[this] = value; }
        }

        [DisplayName("Gps Proveedor"), Column("gps_Proveedor"), Size(1), NotNull]
        public String GpsProveedor
        {
            get { return Fields.GpsProveedor[this]; }
            set { Fields.GpsProveedor[this] = value; }
        }

        [DisplayName("Gps Altitud"), Column("gps_Altitud"), Size(50)]
        public String GpsAltitud
        {
            get { return Fields.GpsAltitud[this]; }
            set { Fields.GpsAltitud[this] = value; }
        }

        [DisplayName("Id Terminal"), Column("idTerminal"), ForeignKey("[dbo].[KRS_Terminales]", "id"), LeftJoin("jIdTerminal"), TextualField("IdTerminalCodigo")]
        public Int64? IdTerminal
        {
            get { return Fields.IdTerminal[this]; }
            set { Fields.IdTerminal[this] = value; }
        }

        [DisplayName("Id Dispositivo Modelo"), Column("idDispositivoModelo"), NotNull, ForeignKey("[dbo].[KRSS_DispositivosModelo]", "id"), LeftJoin("jIdDispositivoModelo"), TextualField("IdDispositivoModeloFabricante")]
        public Int64? IdDispositivoModelo
        {
            get { return Fields.IdDispositivoModelo[this]; }
            set { Fields.IdDispositivoModelo[this] = value; }
        }

        [DisplayName("Modificado"), Column("modificado")]
        public DateTime? Modificado
        {
            get { return Fields.Modificado[this]; }
            set { Fields.Modificado[this] = value; }
        }

        [DisplayName("Anulado"), Column("anulado")]
        public DateTime? Anulado
        {
            get { return Fields.Anulado[this]; }
            set { Fields.Anulado[this] = value; }
        }

        [DisplayName("Validado"), Column("validado")]
        public Int32? Validado
        {
            get { return Fields.Validado[this]; }
            set { Fields.Validado[this] = value; }
        }

        [DisplayName("Tipo Dispositivo"), Column("tipoDispositivo"), ForeignKey("[dbo].[Dispositivos]", "id"), LeftJoin("jDispositivo")]
        public Int32? TipoDispositivo
        {
            get { return Fields.TipoDispositivo[this]; }
            set { Fields.TipoDispositivo[this] = value; }
        }

        [DisplayName("Dispositivo"), Expression("jDispositivo.[Dispositivo]")]
        public String Dispositivo
        {
            get { return Fields.Dispositivo[this]; }
            set { Fields.Dispositivo[this] = value; }
        }

        [DisplayName("Entrada Salida"), Column("entradaSalida"), Size(1), NotNull, ForeignKey("[dbo].[Tipos_fichaje]", "id"), LeftJoin("jTipo")]
        [LookupEditor("Kairos.TiposFichaje")]
        public String EntradaSalida
        {
            get { return Fields.EntradaSalida[this]; }
            set { Fields.EntradaSalida[this] = value; }
        }

        [DisplayName("Fichaje"), Expression("jTipo.[Tipo]")]
        public String Fichaje
        {
            get { return Fields.Fichaje[this]; }
            set { Fields.Fichaje[this] = value; }
        }

        [DisplayName("Id Empresa"), Column("idEmpresa")]
        public Int64? IdEmpresa
        {
            get { return Fields.IdEmpresa[this]; }
            set { Fields.IdEmpresa[this] = value; }
        }

        [DisplayName("Id Terminal Codigo Cliente"), Expression("jIdTerminal.[codigoCliente]")]
        public Int64? IdTerminalCodigoCliente
        {
            get { return Fields.IdTerminalCodigoCliente[this]; }
            set { Fields.IdTerminalCodigoCliente[this] = value; }
        }

        [DisplayName("Id Terminal Codigo"), Expression("jIdTerminal.[codigo]")]
        public String IdTerminalCodigo
        {
            get { return Fields.IdTerminalCodigo[this]; }
            set { Fields.IdTerminalCodigo[this] = value; }
        }

        [DisplayName("Id Terminal Descripcion"), Expression("jIdTerminal.[descripcion]")]
        public String IdTerminalDescripcion
        {
            get { return Fields.IdTerminalDescripcion[this]; }
            set { Fields.IdTerminalDescripcion[this] = value; }
        }

        [DisplayName("Id Terminal Tipo Dispositivo"), Expression("jIdTerminal.[tipoDispositivo]")]
        public Int32? IdTerminalTipoDispositivo
        {
            get { return Fields.IdTerminalTipoDispositivo[this]; }
            set { Fields.IdTerminalTipoDispositivo[this] = value; }
        }

        [DisplayName("Id Terminal Id Departamento"), Expression("jIdTerminal.[idDepartamento]")]
        public Int64? IdTerminalIdDepartamento
        {
            get { return Fields.IdTerminalIdDepartamento[this]; }
            set { Fields.IdTerminalIdDepartamento[this] = value; }
        }

        [DisplayName("Id Terminal Fecha Actualizacion"), Expression("jIdTerminal.[fechaActualizacion]")]
        public DateTime? IdTerminalFechaActualizacion
        {
            get { return Fields.IdTerminalFechaActualizacion[this]; }
            set { Fields.IdTerminalFechaActualizacion[this] = value; }
        }

        [DisplayName("Id Terminal Fecha Borrado"), Expression("jIdTerminal.[fechaBorrado]")]
        public DateTime? IdTerminalFechaBorrado
        {
            get { return Fields.IdTerminalFechaBorrado[this]; }
            set { Fields.IdTerminalFechaBorrado[this] = value; }
        }

        [DisplayName("Id Terminal Dispositivo Huella Dactilar"), Expression("jIdTerminal.[dispositivoHuellaDactilar]")]
        public Boolean? IdTerminalDispositivoHuellaDactilar
        {
            get { return Fields.IdTerminalDispositivoHuellaDactilar[this]; }
            set { Fields.IdTerminalDispositivoHuellaDactilar[this] = value; }
        }

        [DisplayName("Id Terminal Dispositivo Huella Dactilar Numero"), Expression("jIdTerminal.[dispositivoHuellaDactilar_Numero]")]
        public Int32? IdTerminalDispositivoHuellaDactilarNumero
        {
            get { return Fields.IdTerminalDispositivoHuellaDactilarNumero[this]; }
            set { Fields.IdTerminalDispositivoHuellaDactilarNumero[this] = value; }
        }

        [DisplayName("Id Terminal Dispositivo Huella Dactilar Ip"), Expression("jIdTerminal.[dispositivoHuellaDactilar_IP]")]
        public String IdTerminalDispositivoHuellaDactilarIp
        {
            get { return Fields.IdTerminalDispositivoHuellaDactilarIp[this]; }
            set { Fields.IdTerminalDispositivoHuellaDactilarIp[this] = value; }
        }

        [DisplayName("Id Terminal Dispositivo Huella Dactilar Marca"), Expression("jIdTerminal.[dispositivoHuellaDactilar_Marca]")]
        public String IdTerminalDispositivoHuellaDactilarMarca
        {
            get { return Fields.IdTerminalDispositivoHuellaDactilarMarca[this]; }
            set { Fields.IdTerminalDispositivoHuellaDactilarMarca[this] = value; }
        }

        [DisplayName("Id Terminal Dispositivo Huella Dactilar Modelo"), Expression("jIdTerminal.[dispositivoHuellaDactilarModelo]")]
        public String IdTerminalDispositivoHuellaDactilarModelo
        {
            get { return Fields.IdTerminalDispositivoHuellaDactilarModelo[this]; }
            set { Fields.IdTerminalDispositivoHuellaDactilarModelo[this] = value; }
        }

        [DisplayName("Id Terminal Dispositivo Huella Dactilar Firmware"), Expression("jIdTerminal.[dispositivoHuellaDactilar_Firmware]")]
        public String IdTerminalDispositivoHuellaDactilarFirmware
        {
            get { return Fields.IdTerminalDispositivoHuellaDactilarFirmware[this]; }
            set { Fields.IdTerminalDispositivoHuellaDactilarFirmware[this] = value; }
        }

        [DisplayName("Id Terminal Dispositivo Huella Dactilar Puerto"), Expression("jIdTerminal.[dispositivoHuellaDactilar_Puerto]")]
        public String IdTerminalDispositivoHuellaDactilarPuerto
        {
            get { return Fields.IdTerminalDispositivoHuellaDactilarPuerto[this]; }
            set { Fields.IdTerminalDispositivoHuellaDactilarPuerto[this] = value; }
        }

        [DisplayName("Id Terminal Dispositivo Huella Dactilar Dns"), Expression("jIdTerminal.[dispositivoHuellaDactilar_DNS]")]
        public Boolean? IdTerminalDispositivoHuellaDactilarDns
        {
            get { return Fields.IdTerminalDispositivoHuellaDactilarDns[this]; }
            set { Fields.IdTerminalDispositivoHuellaDactilarDns[this] = value; }
        }

        [DisplayName("Id Dispositivo Modelo Codigo Cliente"), Expression("jIdDispositivoModelo.[codigoCliente]")]
        public Int64? IdDispositivoModeloCodigoCliente
        {
            get { return Fields.IdDispositivoModeloCodigoCliente[this]; }
            set { Fields.IdDispositivoModeloCodigoCliente[this] = value; }
        }

        [DisplayName("Id Dispositivo Modelo Fabricante"), Expression("jIdDispositivoModelo.[fabricante]")]
        public String IdDispositivoModeloFabricante
        {
            get { return Fields.IdDispositivoModeloFabricante[this]; }
            set { Fields.IdDispositivoModeloFabricante[this] = value; }
        }

        [DisplayName("Id Dispositivo Modelo Marca"), Expression("jIdDispositivoModelo.[marca]")]
        public String IdDispositivoModeloMarca
        {
            get { return Fields.IdDispositivoModeloMarca[this]; }
            set { Fields.IdDispositivoModeloMarca[this] = value; }
        }

        [DisplayName("Id Dispositivo Modelo Modelo"), Expression("jIdDispositivoModelo.[modelo]")]
        public String IdDispositivoModeloModelo
        {
            get { return Fields.IdDispositivoModeloModelo[this]; }
            set { Fields.IdDispositivoModeloModelo[this] = value; }
        }

        [DisplayName("Id Dispositivo Modelo Mac"), Expression("jIdDispositivoModelo.[mac]")]
        public String IdDispositivoModeloMac
        {
            get { return Fields.IdDispositivoModeloMac[this]; }
            set { Fields.IdDispositivoModeloMac[this] = value; }
        }

        [DisplayName("Id Dispositivo Modelo Fecha Borrado"), Expression("jIdDispositivoModelo.[fechaBorrado]")]
        public DateTime? IdDispositivoModeloFechaBorrado
        {
            get { return Fields.IdDispositivoModeloFechaBorrado[this]; }
            set { Fields.IdDispositivoModeloFechaBorrado[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Observaciones; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FichajesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field IdEmpleado;
            public Int64Field CodigoCliente;
            public DateTimeField FechaHora;
            public StringField Observaciones;
            public StringField GpsPosicionLatitud;
            public StringField GpsPosicionLongitud;
            public DateTimeField GpsFechaHora;
            public StringField GpsProveedor;
            public StringField GpsAltitud;
            public Int64Field IdTerminal;
            public Int64Field IdDispositivoModelo;
            public DateTimeField Modificado;
            public DateTimeField Anulado;
            public Int32Field Validado;
            public Int32Field TipoDispositivo;
            public StringField EntradaSalida;
            public Int64Field IdEmpresa;

            public Int64Field IdTerminalCodigoCliente;
            public StringField IdTerminalCodigo;
            public StringField IdTerminalDescripcion;
            public Int32Field IdTerminalTipoDispositivo;
            public Int64Field IdTerminalIdDepartamento;
            public DateTimeField IdTerminalFechaActualizacion;
            public DateTimeField IdTerminalFechaBorrado;
            public BooleanField IdTerminalDispositivoHuellaDactilar;
            public Int32Field IdTerminalDispositivoHuellaDactilarNumero;
            public StringField IdTerminalDispositivoHuellaDactilarIp;
            public StringField IdTerminalDispositivoHuellaDactilarMarca;
            public StringField IdTerminalDispositivoHuellaDactilarModelo;
            public StringField IdTerminalDispositivoHuellaDactilarFirmware;
            public StringField IdTerminalDispositivoHuellaDactilarPuerto;
            public BooleanField IdTerminalDispositivoHuellaDactilarDns;

            public Int64Field IdDispositivoModeloCodigoCliente;
            public StringField IdDispositivoModeloFabricante;
            public StringField IdDispositivoModeloMarca;
            public StringField IdDispositivoModeloModelo;
            public StringField IdDispositivoModeloMac;
            public DateTimeField IdDispositivoModeloFechaBorrado;
            
            public StringField Empleado;
            public StringField Hora;
            public Int32Field DptoId;
            public Int32Field SedeId;
            public StringField Sede;
            public StringField Dispositivo;
            public StringField Fichaje;
        }
    }
}
