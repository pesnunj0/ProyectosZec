
namespace ProyectosZec.Nuevo_Roezec.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Nuevo_Roezec.Contactos")]
    [BasedOnRow(typeof(Entities.ContactosRow), CheckNames = true)]
    public class ContactosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ContactoId { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Apellidos { get; set; }
        public String Nif { get; set; }
        public String TelefonoFijo { get; set; }
        public String Movil { get; set; }
        public String Idioma { get; set; }
        public String Email { get; set; }
    }
}