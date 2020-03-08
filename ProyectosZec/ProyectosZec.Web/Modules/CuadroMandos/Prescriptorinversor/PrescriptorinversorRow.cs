
namespace ProyectosZec.CuadroMandos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Proyectos"), Module("CuadroMandos"), TableName("prescriptorinversor")]
    [DisplayName("Prescriptorinversor"), InstanceName("Prescriptorinversor")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("CuadroMandos.Prescriptorinversor")]
    public sealed class PrescriptorinversorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Prescriptor Inversor Id"), Identity]
        public Int32? PrescriptorInversorId
        {
            get { return Fields.PrescriptorInversorId[this]; }
            set { Fields.PrescriptorInversorId[this] = value; }
        }

        [DisplayName("Prescriptor Inversor"), Size(20), NotNull, QuickSearch]
        public String PrescriptorInversor
        {
            get { return Fields.PrescriptorInversor[this]; }
            set { Fields.PrescriptorInversor[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PrescriptorInversorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PrescriptorInversor; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PrescriptorinversorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PrescriptorInversorId;
            public StringField PrescriptorInversor;
        }
    }
}
