
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("tecnicos")]
    [DisplayName("Tecnicos"), InstanceName("Tecnicos")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.Tecnicos")]
    public sealed class TecnicosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tecnico Id"), Identity]
        public Int32? TecnicoId
        {
            get { return Fields.TecnicoId[this]; }
            set { Fields.TecnicoId[this] = value; }
        }

        [DisplayName("Nombre Tecnico"), Size(30), NotNull, QuickSearch]
        public String NombreTecnico
        {
            get { return Fields.NombreTecnico[this]; }
            set { Fields.NombreTecnico[this] = value; }
        }

        [DisplayName("Tecnico"), Size(4), NotNull]
        public String Tecnico
        {
            get { return Fields.Tecnico[this]; }
            set { Fields.Tecnico[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TecnicoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NombreTecnico; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TecnicosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TecnicoId;
            public StringField NombreTecnico;
            public StringField Tecnico;
        }
    }
}
