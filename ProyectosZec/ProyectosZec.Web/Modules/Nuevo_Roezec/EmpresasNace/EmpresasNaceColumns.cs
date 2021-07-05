
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.EmpresasNace")]
    [BasedOnRow(typeof(Entities.EmpresasNaceRow), CheckNames = true)]
    public class EmpresasNaceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmpresaNaceId { get; set; }
        public String EmpresaRazon { get; set; }
        public String Nace { get; set; }
    }
}