
namespace ProyectosZec.CuadroMandos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Proyectos"), Module("CuadroMandos"), TableName("proyectos")]
    [DisplayName("Proyectos"), InstanceName("Proyectos")]
    [ReadPermission("CuadroMandos:Read")]
    [ModifyPermission("CuadroMandos:Modify")]
    [InsertPermission("CuadroMandos:Insert")]
    [DeletePermission("CuadroMandos:Delete")]
    [LookupScript("CuadroMandos.Proyectos")]
    public sealed class ProyectosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Proyecto Id"), Identity]
        public Int32? ProyectoId
        {
            get { return Fields.ProyectoId[this]; }
            set { Fields.ProyectoId[this] = value; }
        }

        [DisplayName("Denominacion"), Size(45), NotNull, QuickSearch]
        public String Denominacion
        {
            get { return Fields.Denominacion[this]; }
            set { Fields.Denominacion[this] = value; }
        }

        [DisplayName("TecnicoId"), NotNull, ForeignKey("tecnicos", "TecnicoId"), LeftJoin("jTecnico"), TextualField("Tecnico")]
        [LookupEditor("CuadroMandos.Tecnicos")]
        public Int32? TecnicoId
        {
            get { return Fields.TecnicoId[this]; }
            set { Fields.TecnicoId[this] = value; }
        }

        [DisplayName("SubsectorId"), NotNull, ForeignKey("subsectores", "SubsectorId"), LeftJoin("jSubsector")]
        [LookupEditor(typeof(Entities.SubsectoresRow), CascadeFrom = "SectorId", CascadeField = "SectorId")]
        public Int32? SubsectorId
        {
            get { return Fields.SubsectorId[this]; }
            set { Fields.SubsectorId[this] = value; }
        }

        [DisplayName("SectorId"), Expression("jSubsector.[SectorId]"), ForeignKey("Sectores", "SectorId"), LeftJoin("jSectores")]
        [LookupEditor("CuadroMandos.Sectores")]
        public Int32? SectorId
        {
            get { return Fields.SectorId[this]; }
            set { Fields.SectorId[this] = value; }

        }

        [DisplayName("Sector"), Expression("jSectores.Sector")]

        public String Sector
        {
            get { return Fields.Sector[this]; }
            set { Fields.Sector[this] = value; }

        }


        [DisplayName("Isla"), NotNull, ForeignKey("islas", "IslaId"), LeftJoin("jIsla"), TextualField("Isla")]
        [LookupEditor("CuadroMandos.Islas")]
        public Int32? IslaId
        {
            get { return Fields.IslaId[this]; }
            set { Fields.IslaId[this] = value; }
        }

        [DisplayName("Capital"), NotNull, ForeignKey("capital", "CapitalId"), LeftJoin("jCapital"), TextualField("Capital")]
        [LookupEditor("CuadroMandos.Capital")]
        public Int32? CapitalId
        {
            get { return Fields.CapitalId[this]; }
            set { Fields.CapitalId[this] = value; }
        }

        [DisplayName("Captación"), Size(45)]
        public String Captacion
        {
            get { return Fields.Captacion[this]; }
            set { Fields.Captacion[this] = value; }
        }

        [DisplayName("Prescriptor Inversor"), NotNull, ForeignKey("prescriptorinversor", "PrescriptorInversorId"), LeftJoin("jPrescriptorInversor"), TextualField("PrescriptorInversor")]
        [LookupEditor("CuadroMandos.Prescriptorinversor")]
        public Int32? PrescriptorInversorId
        {
            get { return Fields.PrescriptorInversorId[this]; }
            set { Fields.PrescriptorInversorId[this] = value; }
        }

        [DisplayName("Descripción"), Size(70)]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        [DisplayName("Contacto"), Size(50)]
        public String Contacto
        {
            get { return Fields.Contacto[this]; }
            set { Fields.Contacto[this] = value; }
        }

        [DisplayName("Teléfono"), Size(20)]
        public String Telefono
        {
            get { return Fields.Telefono[this]; }
            set { Fields.Telefono[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Estado"), NotNull, ForeignKey("estados", "EstadoId"), LeftJoin("jEstado"), TextualField("Estado")]
        [LookupEditor("CuadroMandos.Estados")]
        public Int32? EstadoId
        {
            get { return Fields.EstadoId[this]; }
            set { Fields.EstadoId[this] = value; }
        }

        [DisplayName("F. Inicio"), NotNull, DisplayFormat("dd/MM/yyyy")]
        public DateTime? FechaInicio
        {
            get { return Fields.FechaInicio[this]; }
            set { Fields.FechaInicio[this] = value; }
        }

        [DisplayName("F. Presentación"), DisplayFormat("dd/MM/yyyy")]
        public DateTime? FechaPresentacion
        {
            get { return Fields.FechaPresentacion[this]; }
            set { Fields.FechaPresentacion[this] = value; }
        }

        [DisplayName("F.Inscripción"), DisplayFormat("dd/MM/yyyy")]
        public DateTime? FechaInscripcion
        {
            get { return Fields.FechaInscripcion[this]; }
            set { Fields.FechaInscripcion[this] = value; }
        }

        [DisplayName("F. Autorización"), DisplayFormat("dd/MM/yyyy")]
        public DateTime? FechaAutorizacion
        {
            get { return Fields.FechaAutorizacion[this]; }
            set { Fields.FechaAutorizacion[this] = value; }
        }

        [DisplayName("F. Ampliación"), DisplayFormat("dd/MM/yyyy")]
        public DateTime? FechaAmpliacion
        {
            get { return Fields.FechaAmpliacion[this]; }
            set { Fields.FechaAmpliacion[this] = value; }
        }

        [DisplayName("F. Baja"), DisplayFormat("dd/MM/yyyy")]
        public DateTime? FechaBaja
        {
            get { return Fields.FechaBaja[this]; }
            set { Fields.FechaBaja[this] = value; }
        }

        [DisplayName("Empleos"), AlignRight]
        public Int32? Empleos
        {
            get { return Fields.Empleos[this]; }
            set { Fields.Empleos[this] = value; }
        }

        [DisplayName("Inversión"), DisplayFormat("#,##0"), AlignRight]
        public Int32? Inversion
        {
            get { return Fields.Inversion[this]; }
            set { Fields.Inversion[this] = value; }
        }

        [DisplayName("Empleo Real"), AlignRight]
        public Int32? EmpleoReal
        {
            get { return Fields.EmpleoReal[this]; }
            set { Fields.Empleos[this] = value; }
        }

        [DisplayName("Inversión Real"), DisplayFormat("#,##0"), AlignRight]
        public Int32? InversionReal
        {
            get { return Fields.Inversion[this]; }
            set { Fields.Inversion[this] = value; }
        }

        public String Nace
        {
            get { return Fields.Nace[this]; }
            set { Fields.Nace[this] = value; }
        }

        public String Expediente
        {
            get { return Fields.Expediente[this]; }
            set { Fields.Expediente[this] = value; }
        }

        [DisplayName("Técnico"), Expression("jTecnico.[Tecnico]")]
        public String Tecnico
        {
            get { return Fields.Tecnico[this]; }
            set { Fields.Tecnico[this] = value; }
        }

        [DisplayName("Nombre Técnico"), Expression("jTecnico.[NombreTecnico]")]
        public String NombreTecnico
        {
            get { return Fields.NombreTecnico[this]; }
            set { Fields.NombreTecnico[this] = value; }
        }

        [DisplayName("Subsector Sector Id"), Expression("jSubsector.[SectorId]")]
        public Int32? SubsectorSectorId
        {
            get { return Fields.SubsectorSectorId[this]; }
            set { Fields.SubsectorSectorId[this] = value; }
        }

        [DisplayName("Subsector"), Expression("jSubsector.[Subsector]")]
        public String Subsector
        {
            get { return Fields.Subsector[this]; }
            set { Fields.Subsector[this] = value; }
        }


        [DisplayName("Isla"), Expression("jIsla.[Isla]")]
        public String Isla
        {
            get { return Fields.Isla[this]; }
            set { Fields.Isla[this] = value; }
        }

        [DisplayName("Capital"), Expression("jCapital.[Capital]")]
        public String Capital
        {
            get { return Fields.Capital[this]; }
            set { Fields.Capital[this] = value; }
        }

        [DisplayName("Presc./Inversor"), Expression("jPrescriptorInversor.[PrescriptorInversor]")]
        public String PrescriptorInversor
        {
            get { return Fields.PrescriptorInversor[this]; }
            set { Fields.PrescriptorInversor[this] = value; }
        }

        [DisplayName("Estado"), Expression("jEstado.[Estado]")]
        public String Estado
        {
            get { return Fields.Estado[this]; }
            set { Fields.Estado[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProyectoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Denominacion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProyectosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProyectoId;
            public StringField Denominacion;
            public Int32Field TecnicoId;
            public Int32Field SubsectorId;
            public Int32Field SectorId;
            public Int32Field IslaId;
            public Int32Field CapitalId;
            public StringField Captacion;
            public Int32Field PrescriptorInversorId;
            public StringField Descripcion;
            public StringField Contacto;
            public StringField Telefono;
            public StringField Email;
            public Int32Field EstadoId;
            public DateTimeField FechaInicio;
            public DateTimeField FechaPresentacion;
            public DateTimeField FechaInscripcion;
            public DateTimeField FechaAutorizacion;
            public DateTimeField FechaAmpliacion;
            public DateTimeField FechaBaja;
            public Int32Field Empleos;
            public Int32Field Inversion;
            public Int32Field EmpleoReal;
            public Int32Field InversionReal;

            public StringField Tecnico;
            public StringField NombreTecnico;
            public StringField Nace;
            public StringField Expediente;

            public Int32Field SubsectorSectorId;
            public StringField Subsector;
            public StringField Sector;

            public StringField Isla;

            public StringField Capital;

            public StringField PrescriptorInversor;

            public StringField Estado;
        }
    }
}
