
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Idiomas")]
    [BasedOnRow(typeof(Entities.IdiomasRow), CheckNames = true)]
    public class IdiomasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdiomaId { get; set; }
        [EditLink]
        public String Idioma { get; set; }
        public String NombreIdioma { get; set; }
    }
}