
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("estados_empresa")]
    [DisplayName("Estados Empresa"), InstanceName("Estados Empresa")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.EstadosEmpresa")]
    public sealed class EstadosEmpresaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Estado Empresa Id"), Identity]
        public Int32? EstadoEmpresaId
        {
            get { return Fields.EstadoEmpresaId[this]; }
            set { Fields.EstadoEmpresaId[this] = value; }
        }

        [DisplayName("Estado"), Size(50), NotNull, QuickSearch]
        public String Estado
        {
            get { return Fields.Estado[this]; }
            set { Fields.Estado[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EstadoEmpresaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Estado; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EstadosEmpresaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EstadoEmpresaId;
            public StringField Estado;
        }
    }
}
